import axios from 'axios';
import React, { useState } from 'react';
import CardFilter from '../../components/CardFilter';
import CardHeader from '../../components/CardHeader';
import Layout from '../../components/Layout';
import Tables from '../../components/Tables';
import {
  arrKategori, arrOperator, arrStatus, arrTab,
} from '../../utils/DefaultArr';

export default function index({ products }) {
  const [currentTab, setCurrentTab] = useState(arrTab[0]);
  const [arrFilter, setArrFilter] = useState([]);
  const [listActiveDrop, setListActiveDrop] = useState([]);

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
    <div>
      <Layout title="Product">
        <CardHeader arrTab={arrTab} handleTab={handleTab} currentTab={currentTab} />
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
export const getStaticProps = async (context) => {
  const deleteAll = await fetch(`${process.env.NEXT_SERVER_API_URL}/deletes`, { method: 'POST' })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => {
      console.log(err);
    });
  const listKategori = [
    'mobile',
    'bpjstk',
    'ewallet',
    'bpjsks',
    'ewallet',
    'telkom-postpaid',
    'zakat',
    'infaq',
    'wakaf',
    'qurban',
    'multifinance',
  ];

  // get data eksernal
  const arr = await Promise.all(
    listKategori.map((url) => fetch(`${process.env.NEXT_API_URL}/${url}`)
      .then((res) => res.json())
      .then((resdata) => resdata.data)),
  );
  const extProducts = arr.flat();

  // save respon eksternal ke db lokal
  await axios
    .post(`${process.env.NEXT_SERVER_API_URL}/create`, extProducts)
    .then((res) => {
      const data = JSON.stringify(res.data);

      return data;
    }).catch((err) => {
      console.log(err);
    });

  // mengambil data dari db
  const intProducts = await fetch(`${process.env.NEXT_SERVER_API_URL}/read`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      products: intProducts.query,
      // products: [],
    },
  };
};
