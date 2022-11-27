import axios from 'axios';
// import { unstable_getServerSession } from 'next-auth';
import React, { useEffect, useState } from 'react';
import CardFilter from '../components/CardFilter';
import CardHeader from '../components/CardHeader';
import Layout from '../components/Layout';
import { authOptions } from './api/auth/[...nextauth]';

export default function partner() {
  // const { result } = props;

  // const { data: session } = useSession();
  // console.log('session', session);
  const tabs = [
    {
      id: 1, idTab: 'allProduct', label: 'Semua Produk',
    },
    {
      id: 2, idTab: 'updateProduct', label: 'Update Produk',
    },
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const handleTab = (item) => {
    setCurrentTab(item);
  };

  return (
    <Layout>
      {/* <CardHeader tabs={tabs} handleTab={handleTab} currentTab={currentTab} />
      <CardFilter currentTab={currentTab} /> */}
      {/* <Paggination /> */}
      {/* {
        result.map((item) => (
          <div>{item.productType}</div>
        ))
      } */}
      <p>asas</p>
    </Layout>
  );
}

// get data from API
// partner.getServerSession = async (ctx) => {
//   const session = await unstable_getServerSession(
//     ctx.req,
//     ctx.res,
//     authOptions,
//   );
//   const userSession = session.user;

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/auth/login',
//         permanent: false,
//       },
//     };
//   }
//   const listKategori = [
//     // 'mobile',
//     'bpjstk',
//     // 'ewallet',
//     // 'bpjsks',
//     // 'ewallet',
//     // 'telkom-postpaid',
//     // 'zakat',
//     // 'infaq',
//     // 'wakaf',
//     // 'qurban',
//     // 'multifinance',
//   ];
//   const arr = await Promise.all(
//     listKategori.map((url) => fetch(`${process.env.NEXT_API_URL}/${url}`)
//       .then((res) => res.json())
//       .then((resdata) => resdata.data)),
//   );
//   const result = arr.flat();
//   // saveResponse(result);
//   // return { result };
//   return {
//     props: { userSession, result },
//   };
// };
// export default partner;

// export async function saveResponse(arr) {
//   const response = await axios
//     .post(`${process.env.NEXT_SERVER_API_URL}/create`, arr)
//     .then((res) => {
//       const data = JSON.stringify(res.data);
//       return data;
//     }).catch((err) => console.log(err));
//   return response;
// }
// export async function getServerSideProps(context) {
//   const session = await unstable_getServerSession(
//     context.req,
//     context.res,
//     authOptions,
//   );
//   const userSession = session.user;

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/auth/login',
//         permanent: false,
//       },
//     };
//   }
//   const listKategori = [
//     // 'mobile',
//     'bpjstk',
//     // 'ewallet',
//     // 'bpjsks',
//     // 'ewallet',
//     // 'telkom-postpaid',
//     // 'zakat',
//     // 'infaq',
//     // 'wakaf',
//     // 'qurban',
//     // 'multifinance',
//   ];
//   const arr = await Promise.all(
//     listKategori.map((url) => fetch(`${process.env.NEXT_API_URL}/${url}`)
//       .then((res) => res.json())
//       .then((resdata) => resdata.data)),
//   );
//   const result = arr.flat();

//   return {
//     props: { userSession, result },
//   };
// }
