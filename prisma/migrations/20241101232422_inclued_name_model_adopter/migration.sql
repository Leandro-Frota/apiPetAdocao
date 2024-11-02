/*
  Warnings:

  - Added the required column `name` to the `Adopter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Adopter" ADD COLUMN     "name" VARCHAR(150) NOT NULL;
