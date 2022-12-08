import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import TableProduct from "../../../components/TableProduct";
import {
  arrKategori,
  arrOperator,
  arrStatus,
  arrTab,
} from "../../../utils/DefaultArr";

const Products = ({ products }) => {
  const { success, query } = products;
  const [dataProduct, setProducts] = useState([]);
  const [currentTab, setCurrentTab] = useState(arrTab[0]);

  useEffect(() => {
    if (success) {
      setProducts(query);
    }
  }, []);
  const handleTab = (item) => {
    setCurrentTab(item);
  };
  const handleSearch = (e) => {
    setArrFilter({ ...arrFilter, [e.target.name]: e.target.value });
  };

  const onSelectChange = (items) => {
    const { kode, type, label } = items;
    setArrFilter({ ...arrFilter, [type]: kode });
    setListActiveDrop({ ...listActiveDrop, [type]: label });
  };

  return (
    <Layout title="Product">
      <TableProduct
        arrTab={arrTab}
        handleTab={handleTab}
        currentTab={currentTab}
        products={dataProduct}
      />
    </Layout>
  );
};
export default Products;

export const addData = async () => {
  const listKategori = [
    // `${process.env.NEXT_API_URL}/mobile`,
    `${process.env.NEXT_API_URL}/bpjstk`,
    // `${process.env.NEXT_API_URL}/bpjsks`,
    // `${process.env.NEXT_API_URL}/ewallet`,
    // `${process.env.NEXT_API_URL}/telkom-postpaid`,
    // `${process.env.NEXT_API_URL}/zakat`,
    // `${process.env.NEXT_API_URL}/infaq`,
    // `${process.env.NEXT_API_URL}/wakaf`,
    // `${process.env.NEXT_API_URL}/qurban`,
    // `${process.env.NEXT_API_URL}/multifinance`,
  ];
  let allPromises = Promise.all(
    listKategori.map(async (request) => {
      return fetch(request)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return data.data;
        });
    })
  );
  let results = await allPromises;
  const extProducts = results.flat();
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

Products.getInitialProps = async () => {
  const response = await fetch(`${process.env.NEXT_SERVER_API_URL}/read`);
  const data = await response.json();

  if (data.success && Object.keys(data.query).length < 1) {
    const data = await addData();
    return {
      products: data,
    };
  }
  return {
    products: data,
  };
};
