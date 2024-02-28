import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { notFound } from 'next/navigation';
import MarkdownContent from './_components/MarkdownContent';
import ContainerApp from '@/components/ContainerApp';
import { convertDate } from '../_components/convertDate';


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
        if (fontMatter.link) {
            notFound()
        }
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
        <ContainerApp className="pt-10 min-h-[82vh]">
            <article className='mx-auto'>
                <div className='flex justify-end md:-mb-7'>
                    <time className='text-sm text-gray-400'>{convertDate(project.fontMatter.date)}</time>
                </div>
                <MarkdownContent content={project.content} />
            </article>
        </ContainerApp>
    )
}
