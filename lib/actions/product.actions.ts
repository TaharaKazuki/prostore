'use server';

import { PrismaClient } from '@prisma/client';

import { LATEST_PRODUCTS_LIMIT } from '@/lib/constants';
import { convertToPlainObject } from '@/lib/utils';

export async function getLatestProducts() {
  const prisma = new PrismaClient();
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: {
      createdAt: 'desc',
    },
  });
  return convertToPlainObject(data);
}
