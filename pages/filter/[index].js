import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function index() {
  const router = useRouter();
  const { index } = router.query; // productcategory harus sama dengan file name
  console.log(router.query);
  return <Layout>{index}</Layout>;
}
// export const getStaticPaths = async () => {
//   const response = await fetch(`${process.env.NEXT_SERVER_API_URL}/read`);
//   const data = await response.json();
//   const arr = data.query;

//   const paths = arr.map((item) => ({
//     params: {
//       productcategory: `${item.productType}`,
//     },
//   }));

//   return {
//     paths,
//     fallback: 'blocking',
//   };
// };
// // static side generation
// export const getStaticProps = async ({ params }) => {
//   const response = await fetch(`${process.env.NEXT_SERVER_API_URL}/read?productType=${params.productcategory}`);
//   const data = await response.json();
//   const arr = data.query;

//   return {
//     props: {
//       product: arr,
//     },
//   };
// };
