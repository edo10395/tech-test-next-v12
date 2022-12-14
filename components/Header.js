import React, { useEffect } from 'react';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { ArticleIcon } from './icons';
import avatar from '../public/assets/avatar.png';

export default function Header() {
  const { data } = useSession();
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
          <div className="text-skin-base text-2xl">{data?.user?.name}</div>
          <div className="text-xs  text-gray-400 text-right">
            {data?.user?.email}
          </div>
          <div className="text-xs  text-gray-400 text-right">
            <button
              className="h-5 px-2 m-2 text-xs text-indigo-100 transition-colors duration-150 bg-skin-default rounded-lg"
              onClick={() => signOut()}
            >
              Keluar
            </button>
          </div>

        </div>

        <Image className="rounded-full" src={avatar} alt="" width="50" height="50" />
      </div>
    </div>
  );
}
// Header.getInitialProps = () => {
//   return { data: [{ name: edo }] };
// };
