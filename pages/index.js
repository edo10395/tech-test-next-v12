import { unstable_getServerSession } from 'next-auth';
import Layout from '../components/Layout';
import { authOptions } from './api/auth/[...nextauth]';

export default function Home() {
  return (
    <>
      <Layout>Selamat datang !</Layout>
      ;
    </>
  );
}
// mengatur redirect user login ketika session kosong
export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions,
  );

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
