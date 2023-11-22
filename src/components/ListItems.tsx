import getFormattedDate from '@/lib/getFormattedDate'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Category } from '@/lib/conts'
import { PlayPause } from '@/icons'
import { Playfair_Display } from 'next/font/google'

const playFairDisplay = Playfair_Display({subsets: ['latin']})

const ListItems = ({post}: {post: BlogPost}) => {
    const { title, date, id, image, category } = post
    const formattedDate = getFormattedDate(date)
    let icon = null
    let url = null
    switch (category) {
      case Category.ONLINE:
        icon = <PlayPause className={`w-6 h-6 text-purple-500 rounded-full`} />
        url = `online`
        break
      default:
        break
    }
  return (
    <div className='flex flex-col gap-2 p-4 '>
      <h2 className={`text-2xl font-semibold text-gray-100 ${playFairDisplay.className}`}>Últimos posts</h2>
      <ul className='flex sm:flex-col gap-4 flex-wrap'>
        <li className={`p-2 shadow-xl bg-white flex flex-col gap-2 max-w-[340px] rounded-sm`}>
            <div className='flex gap-2 items-center text-sm text-purple-700 font-semibold'>{icon} {category}</div>
            <Link href={`/${url}/${id}`} className={`hover:text-green-600 transition-all`}>
              {
                image && <Image src={image} width={300} height={160} alt={title}/>
              }
                <h2 className='font-semibold text-xl'>{title}</h2>
                
            </Link>
            <p className='text-sm text-gray-400'>{formattedDate} </p>
        </li>
    </ul>
    </div>
  )
}

export default ListItems