import React, { useEffect, useState } from 'react';
import CardHeader from '../components/CardHeader';
import Layout from '../components/Layout';
import Paggination from '../components/Paggination';

export default function partner() {
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
      <CardHeader tabs={tabs} handleTab={handleTab} currentTab={currentTab} />
      {/* <Paggination /> */}
    </Layout>
  );
}

// partner.getInitialProps = async () =>{
//    const response = await fetch ('http')
// }
