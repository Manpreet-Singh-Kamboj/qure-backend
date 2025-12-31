import { prisma } from "../prisma/client.js";
import { redis } from "../redis/index.js";

export class TokenService {
  static generateTokenForClinic = async (
    queueId: string,
    patientId: string
  ) => {
    if (!queueId) {
      throw new Error("Queue ID is required");
    }
    if (!patientId) {
      throw new Error("Patient ID is required");
    }

    await redis.del(`queue:status:${queueId}`);

    const token = await prisma.$transaction(async (tx) => {
      const existingToken = await tx.token.findFirst({
        where: {
          queueId,
          patientId,
          status: "WAITING",
        },
      });

      if (existingToken) {
        throw new Error("You already have an active token");
      }

      const queueDate = new Date();
      queueDate.setHours(0, 0, 0, 0);

      const queue = await tx.queue.findUnique({
        where: { id: queueId, queueDate, isActive: true },
      });

      if (!queue) {
        throw new Error("Queue not found");
      }

      const lastToken = await tx.token.findFirst({
        where: { queueId },
        orderBy: { tokenNumber: "desc" },
      });

      const tokenNumber = lastToken ? lastToken.tokenNumber + 1 : 1;

      return await tx.token.create({
        data: {
          queueId,
          patientId,
          tokenNumber,
        },
      });
    });

    return token;
  };

  static async getNextToken(queueId: string) {
    return await prisma.$transaction(async (tx) => {
      const token = await tx.token.findFirst({
        where: {
          queueId,
          status: "WAITING",
        },
        orderBy: { tokenNumber: "asc" },
      });

      if (!token) {
        throw new Error("No waiting tokens in this queue");
      }

      return await tx.token.update({
        where: { id: token.id },
        data: { status: "CALLED", calledAt: new Date() },
      });
    });
  }

  static async skipToken(queueId: string, tokenId: string) {
    return await prisma.$transaction(async (tx) => {
      const updated = await tx.token.updateMany({
        where: {
          id: tokenId,
          queueId,
          status: "WAITING",
        },
        data: {
          status: "SKIPPED",
          skippedAt: new Date(),
        },
      });

      if (updated.count === 0) {
        throw new Error("Token is not waiting or already processed");
      }

      return await tx.token.findUniqueOrThrow({ where: { id: tokenId } });
    });
  }

  static async completeToken(queueId: string, tokenId: string) {
    return await prisma.$transaction(async (tx) => {
      const updated = await tx.token.updateMany({
        where: {
          id: tokenId,
          queueId,
          status: "CALLED",
        },
        data: {
          status: "COMPLETED",
          completedAt: new Date(),
        },
      });

      if (updated.count === 0) {
        throw new Error("Token is not called or already completed");
      }

      return await tx.token.findUniqueOrThrow({ where: { id: tokenId } });
    });
  }
}
