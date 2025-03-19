-- CreateTable
CREATE TABLE "tecnologies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "highlight" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "tecnologies_pkey" PRIMARY KEY ("id")
);
