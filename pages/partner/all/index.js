import React, { useEffect, useState } from "react";
import CardProduct from "../../../components/CardProduct";
import Layout from "../../../components/Layout";
import TableProduct from "../../../components/TableProduct";

// export default function Index({ products }) {
const Index = ({ products }) => {
  const { success, query } = products;
  const [dataProduct, setProducts] = useState([]);

  useEffect(() => {
    if (success) {
      setProducts(query);
    }
  }, []);

  return (
    <Layout title="Product">
      <CardProduct tabName="Semua Produk">
        <TableProduct data={dataProduct} />
      </CardProduct>
    </Layout>
  );
};
export default Index;

export const addData = async () => {
  let res = await fetch(`${process.env.NEXT_API_URL}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.data;
    });
  const extProducts = res.flat();
  const response = await axios
    .post(`${process.env.NEXT_SERVER_API_URL}/create`, extProducts)
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return response;
};

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.NEXT_SERVER_API_URL}/read`);
  const data = await response.json();

  if (data.success && Object.keys(data.query).length < 1) {
    const data = await addData();
    return {
      props: {
        products: data,
      },
    };
  }
  return {
    props: {
      products: data,
    },
  };
};
// Index.getInitialProps = async (context) => {
//   console.log("ctx", context);
//   const response = await fetch(`${process.env.NEXT_SERVER_API_URL}/read`);
//   const data = await response.json();

//   if (data.success && Object.keys(data.query).length < 1) {
//     const data = await addData();
//     return {
//       products: data,
//     };
//   }
//   return {
//     products: data,
//   };
// };
