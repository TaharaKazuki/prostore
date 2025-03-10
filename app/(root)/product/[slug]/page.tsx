import { notFound } from 'next/navigation';

import { getProductBySlug } from '@/lib/actions/product.actions';

type ProductDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return notFound();

  return <div>ProductDetailsPage</div>;
};

export default ProductDetailsPage;
