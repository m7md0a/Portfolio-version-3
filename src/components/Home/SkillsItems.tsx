'use client'
import { SkillType } from '@/types'
import { motion } from 'framer-motion';
import Image from 'next/image';
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
    className="grid grid-cols-3 gap-3 w-full text-gray-800 px-1 py-3">
        {skills.map(skill => (
            <motion.li key={skill.title} className="flex flex-col items-center text-center" variants={item}>
                <Image src={skill.url} width={30} height={30} alt={skill.title} key={skill.title} />
                <span>{skill.title}</span>
            </motion.li>
        ))}
    </motion.ul>
  )
}
