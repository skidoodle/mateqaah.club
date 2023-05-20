import Link from 'next/link'
import React from 'react'
import copy from 'copy-to-clipboard'
import toast from 'react-hot-toast'

import { IconType } from 'react-icons/lib'

export type IconData = {
  icon: IconType
  color: string
  hover: string
}

type IconProps = {
  icon: IconData
  referencia: string
  kimasolas?: boolean
}

const kimasolKartya = () => {
  toast.remove()
  toast.success('Copied to clipboard', {
    style: {
      background: '#0f1012',
      color: '#fff',
      fontSize: '1em'
    }
  })
}

export const Icon = ({ icon, referencia, kimasolas = false }: IconProps) => {
  return (
    <span className='relative group'>
      {kimasolas ? (
        <span
          onClick={() => {
            kimasolKartya(), copy(referencia)
          }}
          style={{ color: icon.color }}
          className='cursor-pointer hover:opacity-75'
        >
          {React.createElement(icon.icon)}
        </span>
      ) : (
        <Link href={referencia} target='_blank'>
          <span style={{ color: icon.color }} className='hover:opacity-75'>
            {React.createElement(icon.icon)}
          </span>
        </Link>
      )}

      <div className='tooltip absolute bottom-10 shadow-dark -left-1 group-hover:block hidden p-2 bg-[#404040] text-white rounded-lg font-bold'>
        <p className='select-none leading-none text-sm'>{icon.hover}</p>
      </div>
    </span>
  )
}
