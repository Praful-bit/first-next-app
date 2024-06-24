import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <main className='flex flex-col justify-center items-center p-24 h-screen'>
        <h1 className='text-2xl font-serif pb-4'>Blog Pages</h1>
    <p className='text-yellow-400 pb-2'><Link href="/blog/page-1">Page-1</Link></p>
    <p className='text-yellow-400'><Link href="/blog/page-2">page-2</Link></p>
    </main>
  )
}

export default Blog