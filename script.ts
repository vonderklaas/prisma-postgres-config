import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const main = async () => {
  const user = await prisma.user.create({
    data: {
      name: 'Sally',
    },
  });
  const users = await prisma.user.findMany();
  console.log(users);
};

main()
  .catch((error: any) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
