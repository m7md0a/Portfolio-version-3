import React from 'react'
import SkillsItems from './SkillsItems'
import { SkillType } from '@/types'

export default function SkillsCard({title, skills}: {title: string, skills: SkillType[]}) {
  return (
    <div className='flex flex-col nowrap'>
        <div className='mt-16 h-auto w-full rounded-2xl bg-white drop-shadow-md'>
        <span className='flex items-center mx-auto mt-[-1.438rem] w-max rounded-xl py-3 px-5 text-center bg-primary pointer-events-none'>
            <span className='text-white mobile-header-2-semibold'>{title}</span>
        </span>
        <div className='flex flex-wrap mt-7 px-1 pb-5'>
            <SkillsItems skills={skills}/>
        </div>
        </div>
    </div>
  )
}
