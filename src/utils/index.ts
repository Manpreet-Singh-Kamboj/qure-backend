import { Request } from "express";
import { UploadedImage } from "../types";
import fs from "node:fs/promises";

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

export const todayWithTime = (time: string) => {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  const [hours, minutes] = time.split(":").map(Number);

  const estOffsetHours = 5;
  const utcHours = hours + estOffsetHours;

  today.setUTCHours(utcHours, minutes, 0, 0);
  return today;
};

export const getBufferAndType = async (
  input: UploadedImage | string
): Promise<{ buffer: Buffer; type: string }> => {
  let buffer: Buffer;

  if (typeof input === "string") {
    const base64Data = input.replace(/^data:image\/\w+;base64,/, "");
    buffer = Buffer.from(base64Data, "base64");
  } else {
    buffer = await fs.readFile(input.tempFilePath);
  }

  const FileType = await import("file-type");
  const detected = await FileType.fileTypeFromBuffer(buffer);
  const type = detected?.ext || "jpeg";
  return { buffer, type };
};
