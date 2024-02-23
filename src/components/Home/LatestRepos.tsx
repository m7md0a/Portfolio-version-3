import { getRepos } from '@/axios'
import ContainerApp from '../ContainerApp'
import Image from 'next/image'
import Title from './Title'

export default async function LatestRepos() {
  const repos  = await getRepos() /* [
    {
      id: 4,
      html_url: 'd',
      full_name: 'd',
      description: 'dmmdocjnc ocnoce kednnsc jwcon ',
      language: 'edd',
      forks: 's',
      owner :{
        login: 'd',
        html_url: 'd',
        avatar_url: 'https://avatars.githubusercontent.com/54208900'
      },
      topics: ['dm', "dijdn"]
    }
  ]*/

  return repos && (
    <ContainerApp >
        <Title title='Latest Repos'/>
        <div className="grid md:grid-cols-2 gap-2">
          {repos.slice(0, 5).map(repo => (
            <div key={repo.id} className="bg-white border space-y-1 rounded p-4 hover:border-blue-500 duration-200">
              {/* // <Image width={50} height={50} alt="d" src={`https://raw.githubusercontent.com/m7md0a/Portfolio-By-Nextjs/main/screenshot.webp`} /> */}
              <a href={repo.html_url}>
                <h2 className="font-semibold text-blue-500">{repo.full_name}</h2>
              </a>
              <p className="text-sm line-clamp-2 text-black/60">{repo.description}</p>
              <div className='flex flex-wrap gap-x-2'>
                {repo.topics?.map(topic => (
                  <span key={topic} className='px-3 py-1 bg-black/5 text-gray-600 rounded-full text-xs'>{topic}</span>
                ))}
              </div>
              <div className="flex gap-x-6 text-xs mt-2 -mb-2 items-center">
                <div className="text-indigo-500 flex items-center gap-x-2">
                  <span className='w-2 h-2 rounded-full bg-yellow-300'></span>
                  <span>{repo.language}</span>
                </div>
                <div className="flex gap-x2 text-black/50 items-center">
                  <svg data-v-9c34c54e="" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="text-red-500 h-5 w-5 pr-[0.313rem]" width="1em" height="1em" viewBox="0 0 576 512"><path fill="currentColor" d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"></path></svg>
                  {/* <span>forks</span> */}
                  <span>{repo.stargazers_count}</span>
                </div>
                <a href={repo.owner.html_url} className="flex items-center gap-x-1 rounded p-1 text-black/60">
                  <Image className="rounded-full w-4 h-4" width={50} height={50} alt="photo user" src={repo.owner.avatar_url} />
                  <span>{repo.owner.login}</span>
                </a>
              </div>
            </div> 
          ))}
          <div className='col-span-full flex justify-end'>
            <a href='https://github.com/m7md0a?tab=repositories' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>All Repos</a>
          </div>
        </div>
    </ContainerApp>  
  )
}
