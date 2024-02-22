'use client'
import { SkillType } from '@/types'
import { motion } from 'framer-motion';
import React from 'react'

export default function SkillsItems({skills}: {skills: SkillType[]}) {
  const container = {
      hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.4,
            staggerChildren: 0.3
          }
        }
      };
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      }
  return (
    <motion.ul
    variants={container}
    initial="hidden"
    animate="visible"
    className="flex flex-wrap gap-2 text-lg text-gray-800">
        {skills.map(skill => (
            <motion.li key={skill.title} className="bg-white border border-black/10 rounded-xl px-5 py-3 flex items-center space-x-3 hover:scale-110 duration-200 hover:border-indigo-400" variants={item}>
                {/* <Image src={skill.url} width={35} height={35} alt={skill.title} key={skill.title} /> */}
                {skill.title}
            </motion.li>
        ))}
    </motion.ul>
  )
}
