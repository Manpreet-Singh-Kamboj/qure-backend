import "dotenv/config";

export const env = {
  PORT: process.env.PORT || 3000,
  DATABASE_URL: process.env.DATABASE_URL,
  DATABASE_DIRECT_URL: process.env.DATABASE_DIRECT_URL,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY,
  JWT_PUBLIC_KEY: process.env.JWT_PUBLIC_KEY,
};
