import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function NavLink({ href, children }) {
  const pathname = usePathname();

  return <Link className={`${pathname.startsWith(href) && 'bg-sky-600 py-2 px-3 rounded'}`} href={href}>{children}</Link>;
}
