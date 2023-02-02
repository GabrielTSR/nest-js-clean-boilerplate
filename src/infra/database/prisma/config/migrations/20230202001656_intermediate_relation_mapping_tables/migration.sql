/*
  Warnings:

  - You are about to drop the `_AccountToPermission` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_AccountToPermission" DROP CONSTRAINT "_AccountToPermission_A_fkey";

-- DropForeignKey
ALTER TABLE "_AccountToPermission" DROP CONSTRAINT "_AccountToPermission_B_fkey";

-- DropTable
DROP TABLE "_AccountToPermission";

-- CreateTable
CREATE TABLE "_account_to_permission" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_account_to_permission_AB_unique" ON "_account_to_permission"("A", "B");

-- CreateIndex
CREATE INDEX "_account_to_permission_B_index" ON "_account_to_permission"("B");

-- AddForeignKey
ALTER TABLE "_account_to_permission" ADD CONSTRAINT "_account_to_permission_A_fkey" FOREIGN KEY ("A") REFERENCES "accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_account_to_permission" ADD CONSTRAINT "_account_to_permission_B_fkey" FOREIGN KEY ("B") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
