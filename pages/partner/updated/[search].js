import { useRouter } from "next/router";
import React from "react";
import CardProduct from "../../../components/CardProduct";
import Layout from "../../../components/Layout";

const Search = () => {
  const router = useRouter();
  const { search } = router.query; //search harus sesuai dengan nama file
  return (
    <Layout>
      <CardProduct tabName="x Produk">
        {/* <CardFilter
          tabName="Semua Produk"
          handleSearch={handleSearch}
          onSelectChange={onSelectChange}
          arrFilter={arrFilter}
          listActiveDrop={listActiveDrop}
        />
        <TableProduct data={dataProduct} /> */}
        <p>{search}</p>
      </CardProduct>
    </Layout>
  );
};
export default Search;
// export const getStaticProps = async ({ params }) => {
//   console.log(params);
//   const response = await fetch(`${process.env.NEXT_SERVER_API_URL}/read`);
//   const data = await response.json();
//   return {
//     props: {
//       products: data,
//     },
//   };
// };
