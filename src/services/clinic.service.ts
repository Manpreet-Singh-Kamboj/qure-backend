import { UploadedImage } from "../types";
import { prisma } from "../../prisma/client";
import { imageQueue } from "../queues/image.queue";

export class ClinicService {
  static createClinic = async (
    name: string,
    address: string | undefined,
    latitude: number,
    longitude: number,
    phone: string | undefined,
    email: string | undefined,
    website: string | undefined,
    description: string | undefined,
    logo: UploadedImage,
    images: UploadedImage[]
  ) => {
    const clinic = await prisma.clinic.create({
      data: {
        name,
        address,
        latitude,
        longitude,
        phone,
        email,
        website,
        description,
      },
    });
    await imageQueue.add("clinic-logo-upload", {
      clinicId: clinic.id,
      image: logo,
    });
    await imageQueue.addBulk(
      images.map((image) => ({
        name: "clinic-images-upload",
        data: {
          clinicId: clinic.id,
          image,
        },
        opts: {
          removeOnComplete: true,
          removeOnFail: true,
        },
      }))
    );
    return clinic;
  };

  static getClinics = async (
    latitude: number | undefined,
    longitude: number | undefined,
    radius: number | undefined,
    page: number = 1,
    limit: number = 10
  ) => {
    const offset = (page - 1) * limit;

    if (
      latitude !== undefined &&
      longitude !== undefined &&
      radius !== undefined
    ) {
      console.log(latitude, longitude, radius, offset, limit);
      return await prisma.$queryRaw`
        SELECT 
          id, 
          name, 
          address, 
          latitude, 
          longitude, 
          phone, 
          email, 
          website, 
          description, 
          logo, 
          images, 
          "isActive", 
          "createdAt", 
          "updatedAt",
          6371 * acos(
            LEAST(1, GREATEST(-1,
              cos(radians(${latitude})) *
              cos(radians(latitude)) *
              cos(radians(longitude) - radians(${longitude})) +
              sin(radians(${latitude})) *
              sin(radians(latitude))
            ))
          ) AS distance_km
        FROM "Clinic"
        WHERE "isActive" = true
          AND 6371 * acos(
            LEAST(1, GREATEST(-1,
              cos(radians(${latitude})) *
              cos(radians(latitude)) *
              cos(radians(longitude) - radians(${longitude})) +
              sin(radians(${latitude})) *
              sin(radians(latitude))
            ))
          ) < ${radius}
        ORDER BY distance_km ASC
        OFFSET ${offset}
        LIMIT ${limit};
      `;
    }
    return await prisma.clinic.findMany({
      where: {
        isActive: true,
      },
      skip: offset,
      take: limit,
    });
  };
}
