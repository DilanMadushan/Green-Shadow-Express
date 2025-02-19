/*
  Warnings:

  - Added the required column `field` to the `Equipment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `equipment` ADD COLUMN `field` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `User` (
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Equipment` ADD CONSTRAINT `Equipment_field_fkey` FOREIGN KEY (`field`) REFERENCES `Field`(`fieldCode`) ON DELETE RESTRICT ON UPDATE CASCADE;
