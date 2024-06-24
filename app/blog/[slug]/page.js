import React from 'react'

export default function page({params}) {
  return (
   <main className=' text-4xl font-serif h-screen flex flex-col justify-center items-center p-24'>
     <h1>Blog Post</h1>
     <p>{params.slug}</p>
   </main>
  )
}
