import React from 'react'
import { getSortedPostData } from '@/lib/posts'
import ListItems from './ListItems'

const Posts = () => {
    const posts = getSortedPostData()
    return (
        <aside className='w-full flex flex-wrap'>
            <ul>
                {posts.map(post => (
                    <ListItems key={post.id} post={post} />
                ))}
            </ul>
        </aside>
    )
}

export default Posts