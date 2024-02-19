'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function FilterProjects() {
    const [title, setTitle] = useState<string>('')
    const router = useRouter()
    function toSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        router.push(`/search?title=${title}`)
        router.refresh()
    }
  return (
    <ul className='flex space-x-2 mx-40'>
        <Link href='?name=html'>html</Link>
        <Link href='?name=css'>css</Link>
        <Link href='?name=js'>js</Link>
        <Link href='?name=ts'>ts</Link>
    </ul>
  )
}