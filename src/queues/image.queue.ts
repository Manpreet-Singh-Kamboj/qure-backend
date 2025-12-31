import { Job, Queue, Worker, bullMQRedis } from "../redis/index";
import { uploadImage } from "../utils/cloudinary.uploader";
import { prisma } from "../prisma/client";

export const imageQueue = new Queue("image-upload", {
  connection: bullMQRedis,
  defaultJobOptions: {
    removeOnComplete: true,
    removeOnFail: true,
  },
});

const imageWorker = new Worker(
  "image-upload",
  async (job: Job) => {
    console.log(
      `Processing Job ${job.id} with data ${JSON.stringify(job.data)}`
    );
    const { image } = job.data;
    return await uploadImage(image);
  },
  {
    connection: bullMQRedis,
    concurrency: 10,
    lockDuration: 20_000,
  }
);

imageWorker.on("completed", async (job: Job, value) => {
  console.log(`Job ${job.id} completed! Result: ${value}`);
  if (job.name === "clinic-logo-upload") {
    await prisma.doctorClinic.update({
      where: { id: job.data.clinicId },
      data: {
        logo: value,
      },
    });
  }
  if (job.name === "clinic-images-upload") {
    await prisma.doctorClinic.update({
      where: { id: job.data.clinicId },
      data: {
        images: {
          push: value,
        },
      },
    });
  }
});

imageWorker.on("failed", async (job: Job | undefined, error) => {
  console.error(`Job ${job?.id} failed! Error: `);
  console.error(error);
});
