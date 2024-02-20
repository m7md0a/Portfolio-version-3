import { skills, tools } from '@/data/skills'
import ContainerApp from '../ContainerApp'
import SkillsItems from './SkillsItems'


export default function Skills() {
  return (
    <ContainerApp >
        <h1 className="text-3xl font-medium capitalize mb-8 text-center">Skills</h1>
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
