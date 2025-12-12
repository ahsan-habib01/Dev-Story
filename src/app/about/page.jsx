import Title from '@/components/Title'
import Link from 'next/link'
import React from 'react'

export default function aboutPage() {
  return (
    <div>
      <Title>To know about us</Title>
      <nav className='space-x-8 mt-3'>
        <Link href={'/about/contact'}>Contact</Link>
        <Link href={'/about/teams'}>Teams</Link>
      </nav>
    </div>
  )
}
