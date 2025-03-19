/*
  Warnings:

  - You are about to drop the `tecnologies` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "tecnologies";

-- CreateTable
CREATE TABLE "technologies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "highlight" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "technologies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "technologies_projects" (
    "technology_id" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "technologies_projects_pkey" PRIMARY KEY ("technology_id","project_id")
);

-- AddForeignKey
ALTER TABLE "technologies_projects" ADD CONSTRAINT "technologies_projects_technology_id_fkey" FOREIGN KEY ("technology_id") REFERENCES "technologies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "technologies_projects" ADD CONSTRAINT "technologies_projects_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
