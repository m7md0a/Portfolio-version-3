import { backEnd, frontEnd, os, tools } from '@/data/skills'
import ContainerApp from '../ContainerApp'
import SkillsItems from './SkillsItems'
import Title from './Title'
import SkillsCard from './SkillsCard'

export default function Skills() {
  return (
    <ContainerApp>
        <Title title='Skills'/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:grid-flow-col gap-x-4 xl:gap-x-6'>
            <div className='lg:row-start-2 lg:row-span-2 lg:-mt-40'>
              <SkillsCard title='Front End' skills={frontEnd} />
            </div>
            <div className='lg:row-start-1 lg:row-span-2 lg:mt-10'>
              <SkillsCard title='Back End' skills={backEnd} />
              <SkillsCard title='Tools' skills={tools} />
            </div>
            <div className='lg:row-start-1 lg:row-span-2 lg:mt-64'>
              <SkillsCard title='Oprating Systems' skills={os} />
            </div>
        </div>
    </ContainerApp>  
 )
}
