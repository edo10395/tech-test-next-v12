import { unstable_getServerSession } from 'next-auth';
import Header from '../components/Header';
import Layout from '../components/Layout';
import SideNavbar from '../components/SideNavbar';
import { authOptions } from './api/auth/[...nextauth]';

export default function Home() {
  return (
    <Layout>
      <p>Selamat datang !</p>
    </Layout>
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
        destination: '/auth/login',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
