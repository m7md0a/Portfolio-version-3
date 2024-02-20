import { SkillType } from '@/types'
import React from 'react'

export default function SkillsItems({skills}: {skills: SkillType[]}) {
  return (
    <ul className="flex flex-wrap gap-2 text-lg text-gray-800">
        {skills.map(skill => (
            <li key={skill.title} className="bg-white border border-black/10 rounded-xl px-5 py-3 flex items-center space-x-3 hover:scale-110 duration-200 hover:border-indigo-400">
                {/* <Image src={skill.url} width={35} height={35} alt={skill.title} key={skill.title} /> */}
                {skill.title}
            </li>
        ))}
    </ul>
  )
}
