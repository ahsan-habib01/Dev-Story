import Link from 'next/link';
import React from 'react';

export default function dashboardLayout({ children }) {
  return (
    <div className="grid grid-cols-12 gap-5 min-h-screen mx-2">
      {/* Navigation Menu */}
      <div className="col-span-3 border-r-2">
        <h2>Navigation</h2>
        <div className="flex flex-col gap-5 mt-5">
          <Link
            className="py-2 px-4 w-full bg-gray-600 rounded"
            href={'/dashboard/add-story'}
          >
            Add Story
          </Link>
          <Link
            className="py-2 px-4 w-full bg-gray-600 rounded"
            href={'/dashboard/my-profile'}
          >
            My Profile
          </Link>
          <Link
            className="py-2 px-4 w-full bg-gray-600 rounded"
            href={'/dashboard/settings'}
          >
            Settings
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="col-span-9">{children}</div>
    </div>
  );
}
