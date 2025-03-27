'use server';

import { CartItem } from '@/types';

export async function addItemToCart(item: CartItem) {
  console.info(item);
  return { success: true, message: 'Item added to cart' };
}
