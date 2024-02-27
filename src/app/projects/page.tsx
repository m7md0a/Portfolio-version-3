import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Project from './_components/Project'
import { ProjectType } from '@/types'
import ContainerApp from '@/components/ContainerApp'
import Title from '@/components/Home/Title'

export default function Projects () {
  const projectsDir  = "public/projects";
  const files = fs.readdirSync(path.join(projectsDir));
  const projects = files.map((filename: string): ProjectType => {
    const fileContent = fs.readFileSync(path.join(projectsDir, filename), 'utf-8')
    const {data: frontMatter} = matter(fileContent);
    return {
      meta: {
        title: frontMatter.title,
        date: frontMatter.date,
        description: frontMatter.description,
        technologies: frontMatter.technologies,
        image: frontMatter.image,
        link: frontMatter.link
      },
      slug: filename.replace('.mdx', '')
    }
  })

  // const filterProjects = () => {
  //   const filteredProjects = projects.filter(project => {
  //     return project.meta.tec.some(function(tec: string) {
  //       return tec.includes(name());
  //     });
  //   })      
  //   if (filteredProjects.length > 0) {
  //     return filteredProjects
  //   }
  //   else {
  //     return projects.reverse()
  //   }
  // }
  
  return (
   <ContainerApp className='max-w-[90rem] min-h-[85vh]'>
    <Title title='Latest projects' aligin='start' />
    <div className='py-2 grid grid-cols-1 xl:grid-cols-2'>
      {projects.reverse().map((project: ProjectType) =>(
          <Project project={project} key={project.slug}/>
      ))}
    </div>
   </ContainerApp>
  )
}
