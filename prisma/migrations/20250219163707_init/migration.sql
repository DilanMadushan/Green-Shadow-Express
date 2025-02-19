/*
  Warnings:

  - You are about to drop the column `cropCode` on the `field` table. All the data in the column will be lost.
  - Added the required column `fieldCode` to the `Crop` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `field` DROP FOREIGN KEY `Field_cropCode_fkey`;

-- DropIndex
DROP INDEX `Field_cropCode_fkey` ON `field`;

-- AlterTable
ALTER TABLE `crop` ADD COLUMN `fieldCode` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `field` DROP COLUMN `cropCode`;

-- AddForeignKey
ALTER TABLE `Crop` ADD CONSTRAINT `Crop_fieldCode_fkey` FOREIGN KEY (`fieldCode`) REFERENCES `Field`(`fieldCode`) ON DELETE RESTRICT ON UPDATE CASCADE;
