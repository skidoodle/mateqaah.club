'use client'

import { Spotify } from '@/app/components/Spotify'
import { Icon, IconData } from '@/app/components/Icon'

import useSWR from 'swr'
import FadeIn from 'react-fade-in'

import { Toaster } from 'react-hot-toast'
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaSpotify,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'

export default function () {
  const { data: spotify }: any = useSWR(
    '/api/spotify',
    (url: RequestInfo) => fetch(url).then(r => r.json()),
    {
      refreshInterval: 3000,
      fallbackData: 'loading'
    }
  )

  return (
    <div className='relative pt-12 md:pt-32 h-screen min-h-128 select-none'>
      <div className='relative mx-auto max-w-7xl px-10 sm:px-6 lg:px-8 xl:px-4 sm:static'>
        <FadeIn delay={55} transitionDuration={800}>
          <h1 className='text-4xl font tracking-tight font-extrabold text-white sm:text-6xl mb-7'>
            Hi, my name is <span className='text-purple-700'>Matthew</span>
          </h1>
          <p className='text-[#a3a3a3] font-bold text-lg sm:text-xl max-w-4xl mb-4'>
            I'm a 18-year-old high school student from Hungary, currently
            studying <span className='italic text-gray-200'>szak neve</span> at
            the <span className='italic text-gray-200'>egyetem helye</span>
          </p>

          <div className='flex flex-wrap flex-row gap-5 text-4xl'>
            <Icon
              icon={
                {
                  icon: FaInstagram,
                  color: '#fa7e1e',
                  hover: 'mateqaah'
                } as IconData
              }
              referencia={'https://www.instagram.com/mateqaah/'}
            />
            <Icon
              icon={
                {
                  icon: FaGithub,
                  color: '#f0f0f0',
                  hover: 'mateqaah'
                } as IconData
              }
              referencia={'https://github.com/mateqaah'}
            />
            <Icon
              icon={
                {
                  icon: FaTwitter,
                  color: '#00acee',
                  hover: 'mateqaah'
                } as IconData
              }
              referencia={'https://twitter.com/mateqaah'}
            />
            <Icon
              icon={
                {
                  icon: FaYoutube,
                  color: '#cc1414',
                  hover: 'mateqaah0000'
                } as IconData
              }
              referencia={'https://www.youtube.com/c/mateqaah0000'}
            />
            <Icon
              icon={
                {
                  icon: FaDiscord,
                  color: '#5865f2',
                  hover: 'mateqaah#0007'
                } as IconData
              }
              referencia={'mateqaah#0007'}
              kimasolas
            />
            <Icon
              icon={
                {
                  icon: FaSpotify,
                  color: '#1db954',
                  hover: 'mateqaah'
                } as IconData
              }
              referencia={
                'https://open.spotify.com/user/31gup5cmx6mkdp6cmwkuutujqfuy'
              }
            />
          </div>

          <div className='tracking-tight pt-16 text-right float-right'>
            <h1 className='text-white font-extrabold text-4xl sm:text-6xl mb-4'>
              Listening on <span className='text-[#1db954]'>Spotify</span>
            </h1>

            <Spotify
              title={spotify.track?.title}
              url={
                spotify.track?.url ||
                'https://open.spotify.com/user/31gup5cmx6mkdp6cmwkuutujqfuy'
              }
              artists={spotify.track?.artist}
              image={spotify.track?.image}
            />
          </div>
        </FadeIn>
      </div>
      <Toaster />
    </div>
  )
}
