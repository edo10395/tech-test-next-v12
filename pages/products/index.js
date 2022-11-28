import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Layout from '../../components/Layout';
import { requiredAuth } from '../../utils/requiredAuth';
import CardHeader from '../../components/CardHeader';
import CardFilter from '../../components/CardFilter';
import Tables from '../../components/Tables';
import Pagination from '../../components/Pagination';
import {
  arrTab, arrKategori, arrOperator, arrStatus,
} from '../../utils/DefaultArr';
import Drops from '../../components/Drops';

export default function index({ products }) {
  const router = useRouter();
  // const { page, limit } = router.query;

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
  // console.log('selectValue', arrFilter);
  // console.log('activemenu', listActiveDrop);

  const handleClick = () => {
    // router.push(`products/${user.id}`)
  };
  return (
    <div>
      <Layout>
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
        {/*
        <Tables products={products} />
        <Pagination /> */}
      </Layout>

    </div>
  );
}

// membuat static html (saat build time)
export const getStaticProps = async (context) =>
// const listKategori = [
//   // 'mobile',
//   'bpjstk',
//   // 'ewallet',
//   // 'bpjsks',
//   // 'ewallet',
//   // 'telkom-postpaid',
//   // 'zakat',
//   // 'infaq',
//   // 'wakaf',
//   // 'qurban',
//   // 'multifinance',
// ];

// // get data eksernal
// const arr = await Promise.all(
//   listKategori.map((url) => fetch(`${process.env.NEXT_API_URL}/${url}`)
//     .then((res) => res.json())
//     .then((resdata) => resdata.data)),
// );
// const extProducts = arr.flat();

// // save respon eksternal ke db lokal
// await axios
//   .post(`${process.env.NEXT_SERVER_API_URL}/create`, extProducts)
//   .then((res) => {
//     const data = JSON.stringify(res.data);

//     return data;
//   }).catch((err) => {
//     console.log(err);
//   });
// // console.log(saveDb);

// // mengambil data dari db
// const intProducts = await fetch(`${process.env.NEXT_SERVER_API_URL}/read`, { method: 'GET' })
//   .then((response) => response.json())
//   .then((data) => data)
//   .catch((err) => {
//     console.log(err);
//   });

  ({
    props: {
      // products: intProducts.query,
      products: [],
    },
  });
