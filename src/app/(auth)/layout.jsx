import React from 'react';

export default function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen gap-5">
      <div className="flex-2">{children}</div>
      <div className="flex-1 bg-sky-600 p-5 flex justify-center items-center rounded">
        <h1 className="text-5xl font-semibold">Welcome for Authentication</h1>
      </div>
    </div>
  );
}
