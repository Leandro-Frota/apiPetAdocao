-- CreateTable
CREATE TABLE "Adopts" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "phone" INTEGER NOT NULL,
    "address" VARCHAR(150) NOT NULL,

    CONSTRAINT "Adopts_pkey" PRIMARY KEY ("id")
);
