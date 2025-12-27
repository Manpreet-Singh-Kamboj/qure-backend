import z from "zod";

export const createClinicSchema = z.object({
  name: z.string().min(1),
  address: z.string().optional(),
  latitude: z.preprocess((val) => Number(val), z.number()),
  longitude: z.preprocess((val) => Number(val), z.number()),
  phone: z
    .string()
    .regex(/^\d{10}$/)
    .max(10)
    .optional(),
  email: z.email().optional(),
  website: z.url().optional(),
  description: z.string().optional(),
  logo: z.any().optional(),
  images: z.array(z.any()).optional(),
});

export const getClinicsSchema = z
  .object({
    latitude: z.preprocess((val) => Number(val), z.number()).optional(),
    longitude: z.preprocess((val) => Number(val), z.number()).optional(),
    radius: z.preprocess((val) => Number(val), z.number()).optional(),
    page: z.preprocess((val) => Number(val), z.number()).default(1),
    limit: z.preprocess((val) => Number(val), z.number()).default(10),
  })
  .optional();

export type CreateClinicSchema = z.infer<typeof createClinicSchema>;
export type GetClinicsSchema = z.infer<typeof getClinicsSchema>;
