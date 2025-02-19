/*
  Warnings:

  - You are about to drop the column `fieldCode` on the `crop` table. All the data in the column will be lost.
  - Added the required column `field` to the `Crop` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `crop` DROP FOREIGN KEY `Crop_fieldCode_fkey`;

-- DropIndex
DROP INDEX `Crop_fieldCode_fkey` ON `crop`;

-- AlterTable
ALTER TABLE `crop` DROP COLUMN `fieldCode`,
    ADD COLUMN `field` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Log` (
    `logCode` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `field` VARCHAR(191) NOT NULL,
    `crop` VARCHAR(191) NOT NULL,
    `staff` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`logCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Crop` ADD CONSTRAINT `Crop_field_fkey` FOREIGN KEY (`field`) REFERENCES `Field`(`fieldCode`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Log` ADD CONSTRAINT `Log_field_fkey` FOREIGN KEY (`field`) REFERENCES `Field`(`fieldCode`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Log` ADD CONSTRAINT `Log_crop_fkey` FOREIGN KEY (`crop`) REFERENCES `Crop`(`cropCode`) ON DELETE RESTRICT ON UPDATE CASCADE;
