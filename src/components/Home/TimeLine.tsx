import React from 'react'
import ContainerApp from '../ContainerApp'
import Image from 'next/image'
import { timeline } from '@/data/timeline'
import { TimeLineType } from '@/types'


const TimelineItem = ({title, descriptions, links, date}: TimeLineType) => (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <div className="flex items-center justify-center -ms-4 md:-ms-0 w-5 h-5 md:w-10 md:h-10 rounded-full  bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 rtl:md:group-odd:translate-x-1/2 md:group-even:translate-x-1/2 rtl:md:group-even:-translate-x-1/2 group-hover:rotate-180 duration-500">
            <Image width={32} height={30} src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_reactjs.svg" alt='this is icon' />
        </div>
        <div className="w-[calc(100%-1.25rem)] md:w-[calc(50%-2.5rem)] backdrop-blur-sm p-2 md:p-4 rounded border border-slate-200 shadow group-hover:bg-white duration-200 group-hover:scale-105 group-hover:-rotate-1">
            <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-slate-900">{title}</div>
                <time className="font-caveat font-medium text-blue-600">{date}</time>
            </div>
            <div className="text-slate-500">
                {
                    descriptions.map((description, index) => (
                        <p key={index + 'desc'}>- {description}</p>
                    ))
                }
            </div>
            <div className='flex gap-x-2 text-blue-500'>
                {
                    links?.map(link => (
                        <a key={link.title} href={link.url} className='hover:underline'>{link.title}</a>
                    ))
                }
            </div>
        </div>
    </div>
)

export default function TimeLine() {
  return (
    <div className="bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] bg-opacity-20 bg-no-repeat bg-cover">
        <ContainerApp className="my-24">
            <h2 className="text-3xl font-medium capitalize mb-8 text-center">My Experience</h2>
            <div className="space-y-8 relative before:hidden md:before:block before:absolute before:inset-0 before:-ms-1.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {timeline.map(item => (
                    <TimelineItem key={item.title} date={item.date} title={item.title} descriptions={item.descriptions} links={item.links}/>
                ))}
            </div>
        </ContainerApp>
    </div>
  )
}
