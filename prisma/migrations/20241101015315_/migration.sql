/*
  Warnings:

  - You are about to drop the `Adopts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Adopts";

-- CreateTable
CREATE TABLE "Adopter" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "phone" INTEGER NOT NULL,
    "address" VARCHAR(150) NOT NULL,

    CONSTRAINT "Adopter_pkey" PRIMARY KEY ("id")
);
