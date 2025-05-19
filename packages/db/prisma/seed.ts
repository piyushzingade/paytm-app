import { PrismaClient } from "../generated/prisma";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

// async function main() {
//   const alice = await prisma.user.upsert({
//     where: { number: '1111111111' },
//     update: {},
//     create: {
//       number: '1111111111',
//       password: await bcrypt.hash('alice', 10),
//       name: 'alice',
//       balances: {
//         create: {
//             amount: 20000,
//             locked: 250
//         }
//       },
//       OnRampTransaction: {
//         create: {
//           startTime: new Date(),
//           status: "Success",
//           amount: 20000,
//           token: "token__1",
//           provider: "HDFC Bank",
//         },
//       },
//     },
//   })
//   const bob = await prisma.user.upsert({
//     where: { number: '2222222222' },
//     update: {},
//     create: {
//       number: '2222222222',
//       password: await bcrypt.hash('bob', 10),
//       name: 'bob',
//       balances: {
//         create: {
//             amount: 20000,
//             locked: 100
//         }
//       },
//       OnRampTransaction: {
//         create: {
//           startTime: new Date(),
//           status: "Failure",
//           amount: 2000,
//           token: "token__2",
//           provider: "HDFC Bank",
//         },
//       },
//     },
//   })

//   console.log({ alice, bob })
// }
// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })

async function main() {
  // Clear old data (optional but helpful for testing)
  await prisma.merchant.deleteMany();

  // Create Google-auth merchant
  await prisma.merchant.create({
    data: {
      email: "piyushzingade@gmail.com",
      name: "Google Merchant",
      number: "9999999999",
      upiId: "google@upi",
      auth_type: "Google",
    },
  });

  // Create GitHub-auth merchant
  await prisma.merchant.create({
    data: {
      email: "piyushzingade2@gmail.com",
      name: "GitHub Merchant",
      number: "8888888888",
      upiId: "github@upi",
      auth_type: "Github",
    },
  });

  console.log("✅ Seed completed.");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });