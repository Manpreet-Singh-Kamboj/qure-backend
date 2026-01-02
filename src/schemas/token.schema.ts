import z from "zod";

export const generateTokenForClinicSchema = z
  .object({
    queueId: z.uuid(),
  })
  .strict();

export const deleteTokenForClinicSchema = z
  .object({
    tokenId: z.uuid(),
  })
  .strict();

export type GenerateTokenForClinicSchema = z.infer<
  typeof generateTokenForClinicSchema
>;
export type DeleteTokenForClinicSchema = z.infer<
  typeof deleteTokenForClinicSchema
>;
