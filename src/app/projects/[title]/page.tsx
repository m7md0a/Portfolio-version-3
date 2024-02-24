import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { notFound } from 'next/navigation';
import MarkdownContent from './_components/MarkdownContent';

function getProject(name :string){
    const projectsDir  = "public/projects/";
    try {
        const markdownFile = fs.readFileSync(path.join(projectsDir, name + '.mdx'), 'utf-8')
        const{data: fontMatter, content} = matter(markdownFile)
        return {
            fontMatter,
            name,
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
