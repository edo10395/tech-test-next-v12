import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import CardFilter from "../../components/CardFilter";
import CardHeader from "../../components/CardHeader";
import Layout from "../../components/Layout";
import Tables from "../../components/Tables";
import {
  arrKategori,
  arrOperator,
  arrStatus,
  arrTab,
} from "../../utils/DefaultArr";

export default function index({ products }) {
  const [currentTab, setCurrentTab] = useState(arrTab[0]);
  const [arrFilter, setArrFilter] = useState([]);
  const [listActiveDrop, setListActiveDrop] = useState([]);
  const router = useRouter();
  // console.log(products);

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

  console.log(arrFilter);
  return (
    <div>
      <Layout title="Product">
        <CardHeader
          arrTab={arrTab}
          handleTab={handleTab}
          currentTab={currentTab}
        />
        <CardFilter
          arrKategori={arrKategori}
          arrOperator={arrOperator}
          arrStatus={arrStatus}
          currentTab={currentTab}
          handleSearch={handleSearch}
          onSelectChange={onSelectChange}
          arrFilter={arrFilter}
          listActiveDrop={listActiveDrop}
        />
        <Tables products={products} />
        {/*

        <Pagination /> */}
      </Layout>
    </div>
  );
}

// membuat static html (saat build time)
export const getServerSideProps = async (context) => {
  //jika ada parameter query

  const params = context.query;

  if (Object.keys(params).length > 0) {
    console.log("masuk");
    const queryString = new URLSearchParams(params).toString();
    const response = await fetch(
      `${process.env.NEXT_SERVER_API_URL}/read?${queryString}`
    )
      .then((response) => response.json())
      .then((actualData) => {
        return actualData.query;
      });
    const data = response;
    return {
      props: {
        products: data,
      },
    };
  }
  //tutup parameter query

  const listKategori = [
    `${process.env.NEXT_API_URL}/mobile`,
    `${process.env.NEXT_API_URL}/bpjstk`,
    `${process.env.NEXT_API_URL}/ewallet`,
    `${process.env.NEXT_API_URL}/bpjsks`,
    `${process.env.NEXT_API_URL}/ewallet`,
    `${process.env.NEXT_API_URL}/telkom-postpaid`,
    `${process.env.NEXT_API_URL}/zakat`,
    `${process.env.NEXT_API_URL}/infaq`,
    `${process.env.NEXT_API_URL}/wakaf`,
    `${process.env.NEXT_API_URL}/qurban`,
    `${process.env.NEXT_API_URL}/multifinance`,
  ];
  // mengambil data dari db
  const resProduct = await fetch(`${process.env.NEXT_SERVER_API_URL}/read`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => {
      console.log(err);
    });
  const dataLokal = resProduct.query;
  //cek jika sudah ada data ambil dari db
  // console.log(dataLokal); // get data eksernal

  if (Object.keys(dataLokal).length === 0) {
    const arr = await Promise.all(
      listKategori.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((resdata) => resdata.data)
      )
    );

    const extProducts = arr.flat();

    // save respon eksternal ke db lokal
    await axios
      .post(`${process.env.NEXT_SERVER_API_URL}/create`, extProducts)
      .then((res) => res.json())
      .then((data) => {
        data.message;
      })
      .catch((err) => {
        console.log(err);
      });

    return {
      props: {
        // products: extProducts,
        products: [],
      },
    };
  } else {
    return {
      props: {
        products: dataLokal,
        // products: [],
      },
    };
  }
};
