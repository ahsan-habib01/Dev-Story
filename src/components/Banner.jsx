'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Banner() {
  const router = useRouter();

  const handleBtn = () => {
    const password = prompt('Enter your password');
    if (password == '1234') {
      console.log(router);
      router.push('/dashboard')
    }
  };

  return (
    <div className="text-center space-y-5 bg-linear-60 from-sky-50 to-sky-400 rounded p-10 text-black">
      <h2 className="text-4xl font-bold">Welcome to Dev-Story</h2>
      <button
        onClick={handleBtn}
        className="px-4 py-2 bg-sky-600 text-white cursor-pointer rounded hover:bg-black duration-200"
      >
        Share-Story
      </button>
    </div>
  );
}
