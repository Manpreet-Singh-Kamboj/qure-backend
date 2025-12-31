import { v2 as cloudinary, UploadApiOptions } from "cloudinary";
import { env } from "../config/dotenv.config.js";
import { UploadedImage } from "../types/index.js";

cloudinary.config({
  secure: true,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
});

export const uploadImage = async (image: UploadedImage) => {
  const options: UploadApiOptions = {
    resource_type: "image",
  };
  const result = await cloudinary.uploader.upload(image.tempFilePath, options);
  return result.secure_url;
};

export const uploadImages = async (images: UploadedImage[]) => {
  return await Promise.all(images.map(uploadImage));
};
