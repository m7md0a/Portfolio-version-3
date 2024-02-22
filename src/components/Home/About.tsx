'use client'
import ContainerApp from '../ContainerApp'
import { motion } from "framer-motion"
import Title from './Title'
  
  export default function About() {
  return (
    <ContainerApp className="flex justify-center lg:justify-start">
        <motion.div animate={{opacity: 1}} className="mb-28 max-w-[45rem] text-center lg:text-start leading-8 opacity-0">
            <Title title='About me'/>
            <p className="mb-3 text-lg">
              Hello i&apos;m Mohamed Abdelrahman Web Designer from Elminya - Egypt, I have rich experience in web site design and building, also i am good at ReactJs and NextJs, I love to talk with you about our unique. i help you build brand for your business
              Hello i&apos;m Mohamed Abdelrahman Web Designer from Elminya - Egypt, I have rich experience in web site design and building, also i am good at ReactJs and NextJs, I love to talk with you about our unique. i help you build brand for your business
              Hello i&apos;m Mohamed Abdelrahman Web Designer from Elminya - Egypt, I have rich experience in web site design and building, also i am good at ReactJs and NextJs, I love to talk with you about our unique. i help you build brand for your business
            </p>
        </motion.div>
    </ContainerApp>
  )
}
