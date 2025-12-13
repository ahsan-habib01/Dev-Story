import Link from 'next/link'
import React from 'react'

export default function NotFound404() {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col gap-5'>
      <h1>404 | Your Page is Not Found</h1>
      <Link href={'/'} className='underline'>Go to Home</Link>
    </div>
  )
}
