import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { notFound } from 'next/navigation';
import MarkdownContent from './_components/MarkdownContent';


const projectsDir  = "public/projects/";


export async function generateStaticParams(){
    const files =fs.readdirSync(path.join(projectsDir))
    const paths = files.map(filename => ({
        title: filename.replace('.mdx', '')
    }))
    return paths
}

function getProject(title :string){
    try {
        const markdownFile = fs.readFileSync(path.join(projectsDir, title + '.mdx'), 'utf-8')
        const{data: fontMatter, content} = matter(markdownFile)
        return {
            fontMatter,
            title,
            content
        }
    } catch (error) {
        notFound()
    }
}

export default function page({params}: {params: Params}) {
    const project = getProject(params.title)
    return (
        <div>
            <article className='mx-auto'>
                <h1>{project.fontMatter.title}</h1>
                <MarkdownContent content={project.content} />
            </article>
        </div>
    )
}
