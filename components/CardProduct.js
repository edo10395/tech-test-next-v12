import React, { useEffect, useState } from "react";
import CardFilter from "./CardFilter";
import CardHeader from "./CardHeader";

export default function CardProduct(props) {
  const [arrFilter, setArrFilter] = useState([]);
  const [listActiveDrop, setListActiveDrop] = useState([]);

  const handleSearch = (e) => {
    setArrFilter({ ...arrFilter, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (props.params) {
      setListActiveDrop(props.params);
      // setListActiveDrop({ ...listActiveDrop, [type]: label });
    }
  }, [props.params]);
  console.log(listActiveDrop);
  console.log("params", props.params);

  const onSelectChange = (items) => {
    const { kode, type, label } = items;
    setArrFilter({ ...arrFilter, [type]: kode });
    setListActiveDrop({ ...listActiveDrop, [type]: kode });
  };

  return (
    <div className="h-screen flex flex-row justify-start">
      <div className=" flex-1">
        <CardHeader />
        <CardFilter
          tabName={props.tabName}
          handleSearch={handleSearch}
          onSelectChange={onSelectChange}
          arrFilter={arrFilter}
          listActiveDrop={listActiveDrop}
        />
        {props.children}
      </div>
    </div>
  );
}
