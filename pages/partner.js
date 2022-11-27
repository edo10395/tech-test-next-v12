import React from 'react';
import Layout from '../components/Layout';
import { requiredAuth } from '../utils/requiredAuth';

export default function partner({ dataProps }) {
  // console.log(dataProps);
  const data = dataProps?.[0];
  console.log(data.query.length);
  if (data.success && data.query.length > 0) {
    console.log('berisi');
  } else {
    console.log('tidak');
  }
  return (
    <Layout>
      <p>sdsd</p>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const readDataDb = await fetch(`${process.env.NEXT_SERVER_API_URL}/read`, { method: 'GET' })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    }).catch((err) => {
      console.log(err);
      setIsExists(false);
    });

  // return requiredAuth(context, (session) => ({
  //   props: { dataProps: [session, readDataDb] },
  // }));
  return requiredAuth(context, (session) => ({
    props: { dataProps: [readDataDb] },
  }));
}
