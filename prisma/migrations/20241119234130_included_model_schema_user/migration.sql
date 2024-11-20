-- CreateEnum
CREATE TYPE "user_profile" AS ENUM ('MANAGER', 'EMPLOYEE');

-- DropEnum
DROP TYPE "usuario_perfil";

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(100),
    "password" TEXT NOT NULL,
    "profile" "user_profile" NOT NULL DEFAULT 'EMPLOYEE',

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
