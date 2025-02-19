/*
  Warnings:

  - You are about to drop the column `area` on the `field` table. All the data in the column will be lost.
  - Added the required column `size` to the `Field` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `field` DROP COLUMN `area`,
    ADD COLUMN `size` DOUBLE NOT NULL;
