import React from 'react';
import { useRouter } from 'next/router';

export default function unauthenticated() {
  const router = useRouter();

  return (
    <div className="flex h-screen">
      <div className="m-auto flex flex-col justify-center">
        <h3> Your are not authenticated...</h3>
        <button
          onClick={() => {
            router.push('/auth/login');
          }}
          className="bg-indigo-500 rounded-md p-2 text-white shadow-lg content-center"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
