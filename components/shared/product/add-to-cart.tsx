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

  const [isPending, startTransition] = useTransition();

  const handleAddCart = async () => {
    startTransition(async () => {
      const res = await addItemToCart(item);
      if (!res.success) {
        toast('Item added to cart', {
          description: res.message,
          style: { background: '#dc2626', color: '#fff' },
        });
        return;
      }
      toast('Event has been created', {
        description: res.message,
        classNames: {
          toast: 'border-2 border-red-500',
        },
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
