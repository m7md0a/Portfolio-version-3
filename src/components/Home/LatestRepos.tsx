import { getRepos } from '@/axios'
import ContainerApp from '../ContainerApp'
import Image from 'next/image'
import Title from './Title'

export default async function LatestRepos() {
  const repos = await getRepos()
  return repos && (
    <ContainerApp >
        <Title title='Latest Repos'/>
        <div className="grid md:grid-cols-2 gap-2">
          {/* {repos.slice(0, 6).map(repo => (
            <div key={repo.id} className="bg-white border rounded p-4 hover:border-blue-500 duration-200">
              // <Image width={50} height={50} alt="d" src={`https://raw.githubusercontent.com/m7md0a/Portfolio-By-Nextjs/main/screenshot.webp`} />
              <a href={repo.html_url}>
                <h2 className="font-semibold text-blue-500">{repo.full_name}</h2>
              </a>
              <p className="text-sm line-clamp-2 text-black/60">{repo.description}</p>
              <div className="flex gap-x-6 text-xs mt-2 -mb-2 items-center">
                <div className="text-indigo-500">
                  <span>{repo.language}</span>
                </div>
                <div className="flex gap-x-2 text-black/50">
                  <span>forks</span>
                  <span>{repo.forks}</span>
                </div>
                <a href={repo.owner.html_url} className="flex items-center gap-x-1 rounded p-1 text-black/60">
                  <Image className="rounded-full w-4 h-4" width={50} height={50} alt="photo user" src={repo.owner.avatar_url} />
                  <span>{repo.owner.login}</span>
                </a>
              </div>
            </div> 
          ))} */}
          <div className='col-span-full flex justify-end'>
            <a href='https://github.com/m7md0a?tab=repositories' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>All Repos</a>
          </div>
        </div>
    </ContainerApp>  
  )
}
