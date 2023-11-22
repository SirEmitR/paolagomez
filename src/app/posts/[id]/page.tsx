import getFormattedDate from '@/lib/getFormattedDate'
import { getPostData, getSortedPostData } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import { Category } from '@/lib/conts'
import { PlayPause } from '@/icons'
const playFairDisplay = Playfair_Display({subsets: ['latin']})
export function generateMetadata({params}: {params: {id: string}}){
    const posts = getSortedPostData()
    const { id } = params

    const post = posts.find(post => post.id === id)

    if(!post) return {
        title: 'Not found',
    }

    return {
        title: post.title,
    }
    
}

const PostPage = async ({params}: {params: {id: string}}) => {
    const posts = getSortedPostData()
    const { id } = params

    if(!posts.find(post => post.id === id)) return notFound()

    const {title, date, image, category, contentHtml} = await getPostData(id)
    const publishedDate = getFormattedDate(date)
    let icon = null
    switch (category) {
      case Category.ONLINE:
        icon = <PlayPause className={`w-6 h-6 text-purple-500 rounded-full`} />
        break
      default:
        break
    }
    return (
        <main className=''>
            <div className='flex gap-2 items-center text-sm text-purple-700 font-semibold'>{icon} {category}</div>
            <h1 className={`${playFairDisplay.className} text-4xl`}>{title}</h1>
            <p className='text-sm text-gray-400'>Publicado el {publishedDate}</p>
            {image && <Image src={image} width={500} height={500} alt={title} className='mt-4'/>}
            <article className='mt-4'>
                <section dangerouslySetInnerHTML={{__html: contentHtml}} />
            </article>
        </main>
    )
}

export default PostPage