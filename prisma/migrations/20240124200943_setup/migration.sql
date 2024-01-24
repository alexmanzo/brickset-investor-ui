/*
  Warnings:

  - You are about to drop the `Authenticator` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Retailer" AS ENUM ('AMAZON', 'LEGO', 'WALMART', 'TARGET', 'BEST_BUY', 'BARNS_AND_NOBLE', 'OTHER');

-- DropForeignKey
ALTER TABLE "public"."Authenticator" DROP CONSTRAINT "Authenticator_userId_fkey";

-- DropTable
DROP TABLE "public"."Authenticator";

-- DropTable
DROP TABLE "public"."User";

-- DropEnum
DROP TYPE "public"."AuthenticatorTransport";

-- CreateTable
CREATE TABLE "InventoryItem" (
    "id" SERIAL NOT NULL,
    "setNumber" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "pricePerUnit" DOUBLE PRECISION NOT NULL,
    "datePurchased" TIMESTAMP(3) NOT NULL,
    "retailer" "Retailer" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InventoryItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Set" (
    "setNumber" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "shelfLife" INTEGER NOT NULL,
    "yearsRetired" INTEGER NOT NULL,
    "currentValue" DOUBLE PRECISION NOT NULL,
    "retailPrice" DOUBLE PRECISION NOT NULL,
    "subthemeId" INTEGER NOT NULL,
    "themeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Set_pkey" PRIMARY KEY ("setNumber")
);

-- CreateTable
CREATE TABLE "Theme" (
    "id" SERIAL NOT NULL,
    "theme" TEXT NOT NULL,
    "setCount" INTEGER NOT NULL,
    "subthemeCount" INTEGER NOT NULL,
    "yearFrom" INTEGER NOT NULL,
    "yearTo" INTEGER NOT NULL,

    CONSTRAINT "Theme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subtheme" (
    "id" SERIAL NOT NULL,
    "subtheme" TEXT NOT NULL,
    "setCount" INTEGER NOT NULL,
    "yearFrom" INTEGER NOT NULL,
    "yearTo" INTEGER NOT NULL,
    "themeId" INTEGER NOT NULL,

    CONSTRAINT "Subtheme_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InventoryItem" ADD CONSTRAINT "InventoryItem_setNumber_fkey" FOREIGN KEY ("setNumber") REFERENCES "Set"("setNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Set" ADD CONSTRAINT "Set_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "Theme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Set" ADD CONSTRAINT "Set_subthemeId_fkey" FOREIGN KEY ("subthemeId") REFERENCES "Subtheme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subtheme" ADD CONSTRAINT "Subtheme_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "Theme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
