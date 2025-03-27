'use client';

import { CartItem } from '@/types';

type AddToCartProps = {
  item: CartItem;
};

const AddToCart = ({ item }: AddToCartProps) => {
  console.info(item);
  return <div>AddToCart</div>;
};

export default AddToCart;
