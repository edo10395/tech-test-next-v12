import Image from "next/image";
import React from "react";
import company from "../public/assets/company.png";
import TabSection from "./TabSection";

export default function CardHeader(props) {
  const { name } = props;
  return (
    <div className="container">
      <div className="flex flex-row justify-start items-center mb-5 gap-4">
        <div>
          <Image className="rounded-full" src={company} alt="" width="100" height="100"/>
        </div>
        <p className="text-2xl">PARTNER 1</p>
      </div>
      <TabSection />
    </div>
  );
}
