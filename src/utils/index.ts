import { Request } from "express";

export const getClientIp = (req: Request): string | undefined => {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string") {
    return forwarded.split(",")[0].trim();
  }
  return req.socket.remoteAddress;
};

export const getClinicCacheKey = (
  latitude: number,
  longitude: number,
  radius: number,
  limit: number
) => {
  const latBucketSize = radius / 111;
  const latBucket = Math.floor(latitude / latBucketSize);

  const lngBucketSize = radius / (111 * Math.cos((latitude * Math.PI) / 180));
  const lngBucket = Math.floor(longitude / lngBucketSize);

  return `nearby_clinics:${latBucket}:${lngBucket}:${radius}:${limit}`;
};
