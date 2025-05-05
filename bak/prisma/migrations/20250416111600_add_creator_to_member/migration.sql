/*
  Warnings:

  - Added the required column `creatorId` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- Create admin user first
INSERT INTO "User" (id, email, password, name, role, "createdAt", "updatedAt")
VALUES ('admin-user-id', 'admin@zupu.com', 'admin-password-hash', 'System Admin', 'ADMIN', NOW(), NOW());

-- Add creatorId column
ALTER TABLE "Member" ADD COLUMN "creatorId" TEXT;

-- Set default creatorId for existing members
UPDATE "Member" SET "creatorId" = 'admin-user-id';

-- Make creatorId not nullable
ALTER TABLE "Member" ALTER COLUMN "creatorId" SET NOT NULL;

-- Add foreign key constraint
ALTER TABLE "Member" ADD CONSTRAINT "Member_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
