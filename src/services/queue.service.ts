import { prisma } from "../prisma/client.js";
import { todayWithTime } from "../utils/index.js";
import { OpeningHours } from "../types/index.js";
import { redis } from "../redis/index.js";

export class QueueService {
  static async initializeQueue(
    clinicId: string,
    maxQueueSize: number | undefined
  ) {
    return await prisma.$transaction(async (tx) => {
      const clinic = await tx.doctorClinic.findUnique({
        where: {
          id: clinicId,
        },
        select: {
          id: true,
          openingHours: true,
        },
      });
      if (!clinic) {
        throw new Error("Clinic not found");
      }
      const queueDate = new Date();
      queueDate.setUTCHours(0, 0, 0, 0);

      const existingQueue = await tx.queue.findFirst({
        where: {
          clinicId,
          queueDate,
        },
      });

      if (existingQueue) {
        throw new Error("Queue already exists for this date");
      }

      const openingHours = clinic.openingHours as OpeningHours;

      const startTime = todayWithTime(openingHours.start);
      const endTime = todayWithTime(openingHours.end);

      return await tx.queue.create({
        data: {
          clinicId,
          maxQueueSize,
          queueDate,
          startTime,
          endTime,
        },
      });
    });
  }

  static async getQueueStatus(queueId: string) {
    const cachedQueueStatus = await redis.get(`queue:status:${queueId}`);
    if (cachedQueueStatus) return JSON.parse(cachedQueueStatus);

    const queueStatus = await prisma.$transaction(async (tx) => {
      const queueDate = new Date();
      queueDate.setUTCHours(0, 0, 0, 0);

      const queue = await tx.queue.findFirst({
        where: { id: queueId, queueDate },
      });
      if (!queue) throw new Error("Queue not found");

      const waitingCount = await tx.token.count({
        where: {
          queueId: queue.id,
          status: "WAITING",
          tokenNumber: { gt: queue.currentTokenNo },
        },
      });

      return {
        queueId: queue.id,
        currentTokenNo: queue.currentTokenNo,
        waitingCount,
        startTime: queue.startTime,
        endTime: queue.endTime,
      };
    });

    await redis.set(
      `queue:status:${queueId}`,
      JSON.stringify(queueStatus),
      "EX",
      60 * 15
    );

    return queueStatus;
  }

  static async getQueueById(queueId: string) {
    const queue = await prisma.queue.findUnique({
      where: {
        id: queueId,
      },
    });
    if (!queue) {
      throw new Error("Queue not found");
    }
    return queue;
  }

  static async getQueueByClinicId(clinicId: string) {
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);

    const queue = await prisma.queue.findFirst({
      where: {
        clinicId,
        queueDate: {
          gte: today,
          lt: tomorrow,
        },
      },
    });
    if (!queue) {
      throw new Error(
        "Clinic does not have a queue for today. Please try again later."
      );
    }
    return queue;
  }
}
