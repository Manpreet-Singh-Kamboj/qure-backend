import { prisma } from "../../prisma/client";
import { todayWithTime } from "../utils";
import { OpeningHours } from "../types";
import { redis } from "../redis";

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
      queueDate.setHours(0, 0, 0, 0);

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

  static async getQueueStatus(clinicId: string) {
    const cachedQueueStatus = await redis.get(`queue:status:${clinicId}`);
    if (cachedQueueStatus) {
      return JSON.parse(cachedQueueStatus);
    }
    const queueStatus = await prisma.$transaction(async (tx) => {
      const clinic = await prisma.doctorClinic.findUnique({
        where: {
          id: clinicId,
        },
      });
      if (!clinic) {
        throw new Error("Clinic not found");
      }
      const queueDate = new Date();
      queueDate.setHours(0, 0, 0, 0);
      const queue = await tx.queue.findFirst({
        where: {
          clinicId,
          queueDate,
        },
      });
      if (!queue) {
        throw new Error("Queue not found");
      }
      const tokensCount = await tx.token.count({
        where: {
          queueId: queue.id,
        },
      });
      return {
        ...queue,
        waitingCount: Math.max(0, tokensCount - queue.currentTokenNo - 1),
      };
    });
    await redis.set(
      `queue:status:${clinicId}`,
      JSON.stringify(queueStatus),
      "EX",
      60 * 15
    );
    return queueStatus;
  }
}
