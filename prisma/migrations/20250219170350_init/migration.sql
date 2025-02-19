-- CreateTable
CREATE TABLE `Vehicle` (
    `vehicleCode` VARCHAR(191) NOT NULL,
    `plateNumber` VARCHAR(191) NOT NULL,
    `categary` VARCHAR(191) NOT NULL,
    `fuelType` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `staff` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`vehicleCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Equipment` (
    `equipmentId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `staff` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`equipmentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Vehicle` ADD CONSTRAINT `Vehicle_staff_fkey` FOREIGN KEY (`staff`) REFERENCES `Staff`(`staffId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Equipment` ADD CONSTRAINT `Equipment_staff_fkey` FOREIGN KEY (`staff`) REFERENCES `Staff`(`staffId`) ON DELETE RESTRICT ON UPDATE CASCADE;
