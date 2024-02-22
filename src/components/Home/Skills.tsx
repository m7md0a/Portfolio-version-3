import { skills, tools } from '@/data/skills'
import ContainerApp from '../ContainerApp'
import SkillsItems from './SkillsItems'
import Title from './Title'

export default function Skills() {
  return (
    <ContainerApp>
        <Title title='Skills'/> 
        <div className="grid gap-y-10 gap-x-6 row-ga md:grid-cols-[auto_minmax(auto,_1fr)]">
            <div className="flex flex-shrink">
              <span className="font-semibold capitalize">Technology</span>
            </div>
            <SkillsItems skills={skills}/>
            <div className="flex flex-shrink">
              <span className="font-semibold capitalize">Tools</span>
            </div>
            <SkillsItems skills={tools}/>
        </div>
    </ContainerApp>  
  )
}
