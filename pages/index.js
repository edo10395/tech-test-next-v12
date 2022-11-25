import { unstable_getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Layout from "../components/Layout";
import { authOptions } from "./api/auth/[...nextauth]";

export default function Home() {
  return (
    <div>
      <Layout>Selamat datang !</Layout>;
    </div>
  );
}
//mengatur redirect user login ketika session kosong
export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
