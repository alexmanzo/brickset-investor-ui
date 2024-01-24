/*
  Warnings:

  - You are about to drop the `InventoryItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Set` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Subtheme` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Theme` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Retailer" AS ENUM ('AMAZON', 'LEGO', 'WALMART', 'TARGET', 'BEST_BUY', 'BARNS_AND_NOBLE', 'OTHER');

-- DropForeignKey
ALTER TABLE "public"."InventoryItem" DROP CONSTRAINT "InventoryItem_setNumber_fkey";

-- DropForeignKey
ALTER TABLE "public"."Set" DROP CONSTRAINT "Set_subthemeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Set" DROP CONSTRAINT "Set_themeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Subtheme" DROP CONSTRAINT "Subtheme_themeId_fkey";

-- DropTable
DROP TABLE "public"."InventoryItem";

-- DropTable
DROP TABLE "public"."Set";

-- DropTable
DROP TABLE "public"."Subtheme";

-- DropTable
DROP TABLE "public"."Theme";

-- DropEnum
DROP TYPE "public"."Retailer";

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
    "themeName" TEXT NOT NULL,

    CONSTRAINT "Subtheme_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InventoryItem_setNumber_key" ON "InventoryItem"("setNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Theme_theme_key" ON "Theme"("theme");

-- CreateIndex
CREATE UNIQUE INDEX "Subtheme_subtheme_key" ON "Subtheme"("subtheme");

-- AddForeignKey
ALTER TABLE "InventoryItem" ADD CONSTRAINT "InventoryItem_setNumber_fkey" FOREIGN KEY ("setNumber") REFERENCES "Set"("setNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Set" ADD CONSTRAINT "Set_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "Theme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Set" ADD CONSTRAINT "Set_subthemeId_fkey" FOREIGN KEY ("subthemeId") REFERENCES "Subtheme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subtheme" ADD CONSTRAINT "Subtheme_themeName_fkey" FOREIGN KEY ("themeName") REFERENCES "Theme"("theme") ON DELETE RESTRICT ON UPDATE CASCADE;
