/*
  Warnings:

  - You are about to drop the column `field` on the `crop` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `crop` DROP COLUMN `field`;

-- CreateTable
CREATE TABLE `Field` (
    `image1` VARCHAR(191) NOT NULL,
    `image2` VARCHAR(191) NOT NULL,
    `fieldCode` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `area` DOUBLE NOT NULL,
    `cropCode` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`fieldCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Field` ADD CONSTRAINT `Field_cropCode_fkey` FOREIGN KEY (`cropCode`) REFERENCES `Crop`(`cropCode`) ON DELETE RESTRICT ON UPDATE CASCADE;
