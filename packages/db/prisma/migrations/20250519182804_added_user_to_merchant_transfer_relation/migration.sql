-- DropForeignKey
ALTER TABLE "P2pTransfer" DROP CONSTRAINT "P2pTransfer_toUserId_fkey";

-- AlterTable
ALTER TABLE "P2pTransfer" ADD COLUMN     "toMerchantId" INTEGER,
ALTER COLUMN "toUserId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "P2pTransfer" ADD CONSTRAINT "P2pTransfer_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "P2pTransfer" ADD CONSTRAINT "P2pTransfer_toMerchantId_fkey" FOREIGN KEY ("toMerchantId") REFERENCES "Merchant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
