'use client'
import ContainerApp from '../ContainerApp'
import { motion } from "framer-motion"
import Title from './Title'
import Image from 'next/image'
  
  export default function About() {
  return (
    <ContainerApp className="flex justify-center">
        <motion.div animate={{opacity: 1}} className="mb-28 max-w-[45rem] text-center leading-8 opacity-0">
            <Title title='About me'/>
            <figure className="max-w-screen-md mx-auto text-center">
                <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                </svg>
                <blockquote>
                    <p className="text-2xl font-medium text-gray-900 dark:text-white">
                        &quot;Hello i&apos;m Mohamed Abdelrahman Web Designer from Elminya - Egypt, I have rich experience in web site design and building, also i am good at ReactJs and NextJs, I love to talk with you about our unique. i help you build brand for your business&quot;
                    </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                    <Image width={40} height={40} className="w-6 h-6 rounded-full" src="https://avatars.githubusercontent.com/54208900" alt="profile picture" />
                    <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                        <cite className="pe-3 font-medium text-gray-900 dark:text-white">Mohamed Abdelrahman</cite>
                        <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">Web Developer</cite>
                    </div>
                </figcaption>
            </figure>

        </motion.div>
    </ContainerApp>
  )
}
