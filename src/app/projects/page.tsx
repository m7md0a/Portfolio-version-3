import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import FilterProjects from './_components/FilterProjects'

export default function UDnjnjn ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const hamo = typeof searchParams.name === 'string' ? searchParams.name : undefined

  function name() {
    
    // else {
    //   return 'all'
    // }
    if (hamo) {
      return hamo
    }
    return 'all'
  }
  const projectsDir  = "public/projects";
  const files = fs.readdirSync(path.join(projectsDir));

  const projects = files.map((filename: string) => {
    const fileContent = fs.readFileSync(path.join(projectsDir, filename), 'utf-8')
    const {data: frontMatter} = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', '')
    }
  })

  const filterProjects = () => {
    const filteredProjects = projects.filter(project => {
      return project.meta.tec.some(function(tec: string) {
        return tec.includes(name());
      });
    })      
    if (filteredProjects.length > 0) {
      return filteredProjects
    }
    else {
      return projects.reverse()
    }
  }
  
  return (
   <main className='flex flex-col'>
    <h1 className='text-3xl font-bold'>
      My Next.Js projects Site {name()}
    </h1>

    <section className='py-10'>
    <h2 className='text-2xl font-blod'>
      Latest projects
    </h2>
    <FilterProjects />
    <div className='py-2'>
      {filterProjects().map((project: any) =>(
        <Link href={'/projects/' + project.slug} passHref key={project.slug}>
          <div className='py-2 flex justify-between align-middle gap-2'>
            <div>
              <h3 className='text-lg font-blod'>
                {project.meta.title}
              </h3>
              <div>
              
                <p className='text-gray-400'>{project.meta.description}</p>
              </div>
              <div className='my-auto text-gray-400'>
                <p>{project.meta.date}</p>
              </div>
             </div> 
          </div>
        </Link>
      ))}
    </div>
    </section>
   </main>
  )
}
