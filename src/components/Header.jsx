'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import NavLink from './NavLink';

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  if (pathname.startsWith('/dashboard')) return <></>;

  return (
    <header className="px-5 py-4 border-b-2 border-gray-400 flex justify-between items-center flex-wrap">
      <Link href={'/'} className="text-lg font-semibold">
        👨‍💻 Dev-Story
      </Link>
      <nav className="space-x-8">
        <NavLink href={'/about'}>About</NavLink>
        <NavLink href={'/stories'}>Stories</NavLink>
        <NavLink href={'/tutorials'}>Tutorials</NavLink>
        <NavLink href={'/login'}>Login</NavLink>
        <NavLink href={'/register'}>Register</NavLink>
      </nav>
    </header>
  );
};

export default Header;
