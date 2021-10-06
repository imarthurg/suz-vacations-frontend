import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Dashboard from '../components/Layout/Dashboard';

import useAuthStore from '../store/auth.store';

const Page = () => {
  const { logged }: any = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!logged) {
      router.push('/login');
    }
  }, [logged]);

  if (!logged) {
    return null;
  }

  return (
    <Dashboard>
      <Head>
        <title>SUZ - Sistema Unificado ZRP</title>
        <meta name="description" content="SUZ - Sistema Unificado ZRP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Dashboard>
  );
};

export default Page;
