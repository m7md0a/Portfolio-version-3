import React from 'react'

export default function Title({title}: {title: string}) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center lg:text-start">{title}</h2>
  )
}
