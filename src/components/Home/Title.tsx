import React from 'react'

export default function Title({title}: {title: string}) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      <span className='bg-gradient-to-r from-blue-600  via-blue-300 to-blue-600 text-transparent bg-clip-text'>{title}</span>
    </h2>
  )
}
