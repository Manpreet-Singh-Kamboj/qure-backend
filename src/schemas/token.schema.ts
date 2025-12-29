import z from "zod";

export const generateTokenForClinicSchema = z
  .object({
    queueId: z.uuid(),
  })
  .strict();

export type GenerateTokenForClinicSchema = z.infer<
  typeof generateTokenForClinicSchema
>;
