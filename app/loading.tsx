import Image from 'next/image';

import loader from '@/assets/loader.gif';

const LoadingPage = () => {
  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center">
      <Image src={loader} height={150} width={150} alt="Loading..."></Image>
    </div>
  );
};

export default LoadingPage;
