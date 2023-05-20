import Image from 'next/image'
import Link from 'next/link'

import { FaSpotify } from 'react-icons/fa'
import { HiMusicNote } from 'react-icons/hi'

type SpotifyProps = {
  url: string
  title: string
  image: string
  artists: string[]
}

const truncate = (str: string, n: number) =>
  str.length > n ? str.slice(0, n - 1) + '...' : str

export const Spotify = ({
  title = 'Not listening to anything',
  url,
  image,
  artists = ['Spotify']
}: SpotifyProps) => {
  return (
    <Link href={url} target='_blank'>
      <div className='text-right flex items-center justify-start gap-5 bg-opacity-50 min-w-fit min-h-fit h-24 max-h-24 w-2/3 float-right min-w-sm focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 p-4 rounded-md border border-[#242323] bg-[#0f1012] shadow'>
        {image ? (
          <Image
            src={image}
            height={65}
            width={65}
            alt='album cover'
            className='rounded-md w-18'
            quality={100}
          />
        ) : (
          <HiMusicNote size={40} className='text-white w-18' />
        )}

        <div className='flex flex-col justify-start items-start'>
          <h1 className='text-xl text-white font-semibold'>
            {truncate(title, 30)}
          </h1>
          <p className='text-sm text-[#7b7b7b] flex justify-center items-center gap-1'>
            <FaSpotify className='text-xs text-[#1db954]' />
            {artists?.map(artist => artist).join(', ')}
          </p>
        </div>
      </div>
    </Link>
  )
}
