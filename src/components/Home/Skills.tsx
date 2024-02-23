import { backEnd, frontEnd, os, tools } from '@/data/skills'
import ContainerApp from '../ContainerApp'
import SkillsItems from './SkillsItems'
import Title from './Title'

export default function Skills() {
  return (
    <ContainerApp>
        <Title title='Skills'/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:grid-flow-col gap-x-4 xl:gap-x-6'>
            <div className='lg:row-start-2 lg:row-span-2 lg:-mt-40'>
              <div className='flex flex-col nowrap'>
                <div className='mt-16 h-auto w-full rounded-2xl bg-white drop-shadow-md'>
                  <span className='flex items-center mx-auto mt-[-1.438rem] w-max rounded-xl py-3 px-5 text-center bg-black pointer-events-none'>
                    <span className='text-white mobile-header-2-semibold'>Front End</span>
                  </span>
                  <div className='flex flex-wrap mt-7 px-1 pb-5'>
                    <SkillsItems skills={frontEnd}/>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:row-start-1 lg:row-span-2 lg:mt-10'>
              <div className='flex flex-col nowrap'>
                <div className='mt-16 h-auto rounded-2xl w-full bg-white drop-shadow-md'>
                  <span className='flex items-center mx-auto mt-[-1.438rem] w-max rounded-xl py-3 px-5 text-center bg-black pointer-events-none'>
                    <span className='text-white mobile-header-2-semibold'>Back End</span>
                  </span>
                  <div className='flex flex-wrap mt-7 px-1 pb-5'>
                  <SkillsItems skills={backEnd}/>
                  </div>
                </div>
              </div>
              <div className='flex flex-col nowrap'>
                <div  className='mt-16 h-auto  rounded-2xl bg-white drop-shadow-md'>
                  <span className='flex items-center mx-auto mt-[-1.438rem] w-max rounded-xl py-3 px-5 text-center bg-black pointer-events-none'>
                    <span className='text-white mobile-header-2-semibold'>Tools</span>
                  </span>
                  <div className=''>
                  <SkillsItems skills={tools}/>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:row-start-1 lg:row-span-2 lg:mt-64'>
              <div className='flex flex-col nowrap'>
                <div  className='mt-16 h-auto rounded-2xl bg-white drop-shadow-md'>
                  <span className='flex items-center mx-auto mt-[-1.438rem] w-max rounded-xl py-3 px-5 text-center bg-black pointer-events-none'>
                    <span className='text-white mobile-header-2-semibold'>Oprating Systems</span>
                  </span>
                  <div className='flex flex-wrap mt-7 px-1 pb-5'>
                  <SkillsItems skills={os}/>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </ContainerApp>  
 )
}
