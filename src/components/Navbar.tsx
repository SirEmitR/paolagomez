import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex flex-col justify-center items-center py-4 gap-6 bg-white shadow-2xl'>
        <Link href={'/'} className=''>
             <Image src="/images/logoo.png" alt="logo" width={100} height={100} quality={100} priority />
        </Link>
        <ul className='flex gap-5 items-center flex-wrap justify-center'>
          <li ><Link className='p-2 px-3 rounded-full border-2 border-gray-500 hover:text-white transition-all hover:bg-green-700 hover:border-white' href={'/#tienda'}>Tienda online</Link></li>
          <li><Link className='p-2 px-3 rounded-full border-2 border-gray-500 hover:text-white transition-all hover:bg-green-700 hover:border-white' href={'/#online'}>Cursos online</Link></li>
          <li><Link className='p-2 px-3 rounded-full border-2 border-gray-500 hover:text-white transition-all hover:bg-green-700 hover:border-white' href={'/#tienda'}>Workshops</Link></li>
          <li><Link className='p-2 px-3 rounded-full border-2 border-gray-500 hover:text-white transition-all hover:bg-green-700 hover:border-white' href={'/#galeria'}>Galeria</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar