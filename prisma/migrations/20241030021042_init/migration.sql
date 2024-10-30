-- CreateTable
CREATE TABLE "Pets" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "species" VARCHAR(100) NOT NULL,
    "dateBorn" DATE NOT NULL,
    "description" TEXT NOT NULL,
    "status" VARCHAR(30) NOT NULL,

    CONSTRAINT "Pets_pkey" PRIMARY KEY ("id")
);
