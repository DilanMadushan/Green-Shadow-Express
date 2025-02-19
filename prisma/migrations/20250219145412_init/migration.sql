-- CreateTable
CREATE TABLE `Crop` (
    `image` VARCHAR(191) NOT NULL,
    `cropCode` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `scientificName` VARCHAR(191) NOT NULL,
    `sesson` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `field` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`cropCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
