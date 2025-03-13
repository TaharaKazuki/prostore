import { redirect } from 'next/navigation';

import { auth } from '@/auth';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

type SignInPageProps = {
  searchParams: Promise<{
    callbackUrl?: string;
  }>;
};

const SignInPage = async ({ searchParams }: SignInPageProps) => {
  const { callbackUrl } = await searchParams;

  const session = await auth();

  if (session) {
    return redirect(callbackUrl || '/');
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};

export default SignInPage;
