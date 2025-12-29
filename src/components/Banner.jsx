'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import Swal from 'sweetalert2';

export default function Banner() {
  const router = useRouter();

  const handleBtn = async () => {
    const result = await Swal.fire({
      title: 'Enter your password',
      input: 'password',
      inputLabel: 'Password',
      inputPlaceholder: 'Enter your password',
      inputAttributes: {
        maxlength: '10',
        autocapitalize: 'off',
        autocorrect: 'off',
      },
      showCancelButton: true,
    });

    if (result.value === '1234') {
      router.push('/dashboard');
    } else if (result.isConfirmed) {
      Swal.fire('Wrong password', 'Try again', 'error');
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
