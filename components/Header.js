import React, { useEffect } from "react";
import { ArticleIcon } from "./icons";
import avatar from "../public/assets/avatar.png";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function Header() {
  // const [session, loading] = useSession();
  // console.log({ session, loading });
  return (
    <div className="bg-white flex flex-row justify-between rounded p-2 mb-5">
      <div className="flex flex-row items-center gap-2">
        <ArticleIcon />
        <ArticleIcon />
      </div>
      {/* <div className="bg-danger flex flex-row items-center gap-2">
        <p>Nama User</p>
        <Image src={avatar} alt="logo" width="50" height="50" />
      </div> */}
      <div className="flex items-center space-x-2 gap-2">
        <div className="font-medium">
          {/* <div className="text-skin-base text-2xl">{data}</div> */}
          {/* <div className="text-xs  text-gray-400 text-right">
            {data.user.email}
          </div> */}
        </div>
        <Image className="rounded-full" src={avatar} alt="" width="50" height="50" />
      </div>
    </div>
  );
}
// Header.getInitialProps = () => {
//   return { data: [{ name: edo }] };
// };
