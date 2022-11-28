import { unstable_getServerSession } from 'next-auth';
import Layout from '../components/Layout';
import { authOptions } from './api/auth/[...nextauth]';

export default function Home() {
  return (
    <Layout title="Home">
      <div className="bg-white rounded-md p-10">
        <p>Selamat datang !</p>
      </div>
    </Layout>
  );
}
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
