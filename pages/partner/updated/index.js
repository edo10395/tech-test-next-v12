import { useRouter } from "next/router";
import React, { useState } from "react";
import CardFilter from "../../../components/CardFilter";
import CardProduct from "../../../components/CardProduct";
import Layout from "../../../components/Layout";

export default function index() {
  const [arrFilter, setArrFilter] = useState([]);
  const [listActiveDrop, setListActiveDrop] = useState([]);
  const router = useRouter();

  const handleSearch = (e) => {
    setArrFilter({ ...arrFilter, [e.target.name]: e.target.value });
  };

  const onSelectChange = (items) => {
    const { kode, type, label } = items;
    setArrFilter({ ...arrFilter, [type]: kode });
    setListActiveDrop({ ...listActiveDrop, [type]: label });
  };

  return (
    <Layout title="Update">
      <CardProduct
        tabName="Update Produk"
        handleSearch={handleSearch}
        onSelectChange={onSelectChange}
        arrFilter={arrFilter}
        listActiveDrop={listActiveDrop}
      >
        <p>Updated</p>
      </CardProduct>
    </Layout>
  );
}
