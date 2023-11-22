import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'src/posts')

export function getSortedPostData(){
    const fileNmaes = fs.readdirSync(postsDirectory)
    const allPostData = fileNmaes.map(fileName => {
        const id = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf-8')
        const matterResult = matter(fileContents)
        const blogPost: BlogPost = {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            image: matterResult.data.image || null,
            category: matterResult.data.category,
        }
        return blogPost
    })

    return allPostData.sort((a, b) => {
        if(a.date < b.date){
            return 1
        } else {
            return -1
        }
    })
}

export async function getPostData(id:string) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    const matterResult = matter(fileContents)
    const processedContent = await remark().use(html).process(matterResult.content)
    const contentHtml = processedContent.toString()
    const blogPost: BlogPost & {contentHtml: string} = {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        image: matterResult.data.image || null,
        category: matterResult.data.category,
        contentHtml,
    }
    return blogPost
    
}