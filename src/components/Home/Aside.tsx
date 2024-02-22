import { getProfileData } from '@/axios'
import Image from 'next/image'

export default async function Aside() {
    const profile = await getProfileData()    
  return profile && (
    <aside className="w-full h-5/6 bg-white shadow-md rounded-xl flex flex-col items-center space-y-2 px-3 text-center">
        <Image className='w-32 rounded-full' src={profile?.avatar_url} width={150} height={150} alt='this is my photo' />
        <h1 className='text-xl font-semibold'>{profile.name}</h1>
        <p className='text-gray-700'>{profile.bio}</p>

    </aside>
  )
}
