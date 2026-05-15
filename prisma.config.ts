import dotenv from "dotenv";
import { defineConfig } from "prisma/config";

const env = process.env.NODE_ENV || "development";

dotenv.config({
  path: `.env.${env}`
});

export default defineConfig({
  schema: "src/shared/infrastructure/database/prisma/schema.prisma",
  migrations: {
    path: "src/shared/infrastructure/database/prisma/migrations"
  },
  datasource: {
    url: process.env.DATABASE_URL
  }
});
