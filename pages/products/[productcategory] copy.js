import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';

export default function Category({ product }) {
  // const router = useRouter();
  // const { productcategory } = router.query;// productcategory harus sama dengan file name
  // console.log(product);
  return (
    <Layout>
      {
        product.map((item) => (
          <p>{item.productName}</p>
        ))
      }
    </Layout>
  );
}
export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.NEXT_SERVER_API_URL}/read`);
  const data = await response.json();
  const arr = data.query;

  const paths = arr.map((item) => ({
    params: {
      productcategory: `${item.productType}`,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};
// static side generation
export const getStaticProps = async ({ params }) => {
  const response = await fetch(`${process.env.NEXT_SERVER_API_URL}/read?productType=${params.productcategory}`);
  const data = await response.json();
  const arr = data.query;

  return {
    props: {
      product: arr,
    },
  };
};
