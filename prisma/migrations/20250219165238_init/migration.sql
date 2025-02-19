-- CreateTable
CREATE TABLE `Staff` (
    `staffId` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `dob` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `joinDate` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `mobile` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`staffId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Log` ADD CONSTRAINT `Log_staff_fkey` FOREIGN KEY (`staff`) REFERENCES `Staff`(`staffId`) ON DELETE RESTRICT ON UPDATE CASCADE;
