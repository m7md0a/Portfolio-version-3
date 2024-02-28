'use client'
import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import { InView } from 'react-intersection-observer'

export default function Title({title, aligin, className}: {title: string, aligin?: 'start'|'end'|'center', className?: string}) {
  const controls = useAnimation();
  const titleVariants = {
      hidden: { 
        opacity: 0,
        scale: 0,
      },
      visible: {
        opacity: 1,
        scale: 1
      }
    }
  return (
    <InView triggerOnce={false} 
    onChange={(inView, entry) => {
      if (inView) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }
    }}>
      {({ ref }) => (
        <motion.h2 ref={ref} variants={titleVariants} initial="hidden"  animate={controls} className={`text-3xl font-medium capitalize mb-8 text-${aligin || 'center'}`}>
          <span className={`bg-gradient-to-r from-primary to-two font-bold  text-transparent bg-clip-text ${className}`}>{title}</span>
        </motion.h2>
      )}
    </InView>
  )
}
