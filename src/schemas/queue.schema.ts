import z from "zod";

export const initializeQueueParamsSchema = z.object({
  clinicId: z.uuid().min(1),
});

export const initializeQueueBodySchema = z.object({
  maxQueueSize: z.number().optional(),
});

export const getQueueStatusParamsSchema = z.object({
  clinicId: z.uuid().min(1),
});

export type InitializeQueueParamsSchema = z.infer<
  typeof initializeQueueParamsSchema
>;
export type InitializeQueueBodySchema = z.infer<
  typeof initializeQueueBodySchema
>;
export type GetQueueStatusParamsSchema = z.infer<
  typeof getQueueStatusParamsSchema
>;
