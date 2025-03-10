'use client';

import Image from 'next/image';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { Product } from '@/types';

type ProductImageProps = {
  images: Product['images'];
};

const ProductImages = ({ images }: ProductImageProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  return (
    <div>
      <Image
        src={images[currentImage]}
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
      />
      <div className="flex">
        {images.map((image, i) => (
          <div
            key={image}
            onClick={() => setCurrentImage(i)}
            className={cn(
              'mr-2 cursor-pointer border hover:border-orange-600',
              currentImage === i && 'border-orange-500'
            )}
          >
            <Image src={image} alt="image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
