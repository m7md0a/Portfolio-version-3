import React from 'react'

export default function Title({title, aligin, className}: {title: string, aligin?: 'start'|'end'|'center', className?: string}) {
  return (
    <h2 className={`text-3xl font-medium capitalize mb-8 text-${aligin || 'center'}`}>
      <span className={`bg-gradient-to-r from-blue-600  via-blue-300 to-blue-600 text-transparent bg-clip-text ${className}`}>{title}</span>
    </h2>
  )
}
