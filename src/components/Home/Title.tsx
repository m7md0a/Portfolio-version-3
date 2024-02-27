import React from 'react'

export default function Title({title, aligin, className}: {title: string, aligin?: 'start'|'end'|'center', className?: string}) {
  return (
    <h2 className={`text-3xl font-medium capitalize mb-8 text-${aligin || 'center'}`}>
      <span className={`bg-gradient-to-r from-primary to-two font-bold  text-transparent bg-clip-text ${className}`}>{title}</span>
    </h2>
  )
}
