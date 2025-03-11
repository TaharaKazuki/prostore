import { PrismaClient } from '@prisma/client';

import sampleData from './sample-data';

async function main() {
  const prisma = new PrismaClient();

  await Promise.all([
    prisma.product.deleteMany(),
    prisma.account.deleteMany(),
    prisma.session.deleteMany(),
    prisma.verificationToken.deleteMany(),
    prisma.user.deleteMany(),
  ]);

  await Promise.all([
    prisma.product.createMany({
      data: sampleData.products,
    }),
    prisma.user.createMany({
      data: sampleData.users,
    }),
  ]);

  console.info('Database seeded successfully');
  await prisma.$disconnect();
}

main().catch((error) => {
  console.error('Error seeding database:', error);
  process.exit(1);
});
