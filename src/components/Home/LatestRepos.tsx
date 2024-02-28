'use client'
import { getPinnedProjects } from '@/axios'
import ContainerApp from '../ContainerApp'
import Image from 'next/image'
import Title from './Title'
import { useEffect, useRef, useState } from 'react'
import { PinnedRepoType } from '@/types'
import { pinnedRepos } from '@/data/pinned'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function LatestRepos() {
  const [repos, setRepos] = useState<PinnedRepoType[] | undefined>(pinnedRepos)
  async function getData() {
    const data  = await getPinnedProjects()
    setRepos(data)
  }
  useEffect(() => {
    getData();
  }, [])

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  return repos && (
    <ContainerApp >
        <Title title='Latest Repos'/>
        <motion.div  ref={ref}
      style={{
        scale: scaleProgess,
        // opacity: opacityProgess,
      }}
          className="grid md:grid-cols-2 gap-2">
          {repos.slice(0, 6).map((repo, index) => (
            <motion.div key={repo.name} className="bg-white border space-y-1 rounded p-4 hover:border-blue-500 duration-200">
              <a href={repo.url}>
                <h2 className="font-semibold text-primary">{repo.name}</h2>
              </a>
              <p className="text-sm line-clamp-2 text-black/60">{repo.description}</p>
              <div className='flex flex-wrap gap-1'>
                {repo.tags?.map(tag => (
                  <span key={tag} className='px-3 py-1 bg-primary/10 text-primary/90 rounded-full text-xs'>{tag}</span>
                ))}
              </div>
              <div className="flex gap-x-6 text-xs mt-2 -mb-2 items-center">
                <a href={repo.home} className="text-primary hover:underline">
                  <span>Preview</span>
                </a>
                <div className="flex gap-x-1 text-black/50 items-center">
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" className="w-3 h-3 fill-gray-500">
                        <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                    </svg>
                  <span>{repo.forks}</span>
                </div>
                <div className="flex text-black/50 items-center">
                  <svg data-v-9c34c54e="" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="text-yellow-500 h-5 w-5 pr-[0.313rem]" width="1em" height="1em" viewBox="0 0 576 512"><path fill="currentColor" d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"></path></svg>
                  <span>{repo.stars}</span>
                </div>
                <a href='https://github.com/m7md0a' className="flex items-center gap-x-1 rounded p-1 text-black/60">
                  <Image className="rounded-full w-4 h-4" width={50} height={50} alt="photo user" src="/images/m7md0a.webp" />
                  <span>m7md0a</span>
                </a>
              </div>
            </motion.div> 
          ))}
          <div className='col-span-full flex justify-end'>
            <a href='https://github.com/m7md0a?tab=repositories' className='text-white bg-primary/95 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>All Repos</a>
          </div>
        </motion.div>
    </ContainerApp>  
  )
}
