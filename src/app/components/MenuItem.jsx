'use client'

import { RiGroupLine } from 'react-icons/ri'
import { BsCameraVideo } from 'react-icons/bs'
import { AiFillHome, AiOutlineCompass } from 'react-icons/ai'

export default function MenuItem ({ iconString, colorString, sizeString }) {
  const icons = () => {
    if (iconString === 'Para ti') {
      return (
        <AiFillHome
          size={sizeString}
          color={colorString}
          className='text-[#f02c56]'
        />
      )
    }
    if (iconString === 'Siguiendo') {
      return (
        <RiGroupLine
          size={sizeString}
          color={colorString}
        />
      )
    }
    if (iconString === 'Explorar') {
      return (
        <AiOutlineCompass
          size={sizeString}
          color={colorString}
        />
      )
    }
    if (iconString === 'LIVE') {
      return (
        <BsCameraVideo
          size={sizeString}
          color={colorString}
        />
      )
    }
  }

  return (
    <>
      <div
        className='w-full flex items-center hover:bg-[rgba(32,24,35,.03)] active:bg-gray-100 p-2.5 rounded-md'
        style={{
          transition: 'background ease-in-out 200ms'
        }}
      >
        <div className='flex items-center lg:mx-0 mx-auto'>

          {icons()}

          <p className={`lg:block hidden pl-[9px] mt-0.5 font-bold text-[17px] text-[${colorString}]`}>
            {iconString}
          </p>
        </div>
      </div>
    </>
  )
}
