import { PrismaClient } from '../generated/prisma'; // ✅ if alias is set correctly


const prismaClientSingleton = () => new PrismaClient();

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;

export default prisma;
