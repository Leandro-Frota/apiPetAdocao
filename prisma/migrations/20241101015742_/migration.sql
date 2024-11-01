-- CreateTable
CREATE TABLE "AdoptionProcess" (
    "id" TEXT NOT NULL,
    "pet_id" TEXT NOT NULL,
    "adopter_id" TEXT NOT NULL,
    "data_adocao" DATE NOT NULL,

    CONSTRAINT "AdoptionProcess_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AdoptionProcess" ADD CONSTRAINT "fk_pet" FOREIGN KEY ("pet_id") REFERENCES "Pets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "AdoptionProcess" ADD CONSTRAINT "fk_adopter" FOREIGN KEY ("adopter_id") REFERENCES "Adopter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
