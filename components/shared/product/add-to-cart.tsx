'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { addItemToCart } from '@/lib/actions/cart.actions';
import { CartItem } from '@/types';

type AddToCartProps = {
  item: CartItem;
};

const AddToCart = ({ item }: AddToCartProps) => {
  const router = useRouter();

  const [_isPending, startTransition] = useTransition();

  const handleAddCart = async () => {
    startTransition(async () => {
      const res = await addItemToCart(item);
      if (!res.success) {
        toast(res.message, {
          style: { background: '#dc2626', color: '#fff' },
        });
        return;
      }
      toast(res.message, {
        action: {
          label: 'Go To Cart',
          onClick: () => router.push('/cart'),
        },
      });
    });
  };

  return (
    <Button className="w-full" type="button" onClick={handleAddCart}>
      AddToCart
    </Button>
  );
};

export default AddToCart;
