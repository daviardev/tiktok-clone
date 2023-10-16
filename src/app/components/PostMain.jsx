import Link from 'next/link'
import Image from 'next/image'

import { useEffect } from 'react'

import { ImMusic } from 'react-icons/im'
import PostMainLikes from './PostMainLikes'

export default function PostMain ({ id, userId, videoUrl, title, name, createdAt, avatar }) {
  useEffect(() => {
    const video = document.getElementById(`video-${id}`)
    const postMainElement = document.getElementById(`PostMain-${id}`)

    if (postMainElement) {
      const observer = new window.IntersectionObserver(e => {
        e[0].isIntersecting ? video.play() : video.pause()
      }, {
        threshold: [0.6]
      })

      observer.observe(postMainElement)
    }
  }, [])
  return (
    <>
      <div id={`PostMain-${id}`} className='flex border-b py-6'>
        <Image
          src={avatar}
          alt={`Imagen de perfil del usuario ${name}`}
          width={60}
          height={60}
          className='rounded-full max-h-[60px] cursor-pointer'
        />

        <div className='pl-3 w-full px-4'>
          <div className='flex items-center justify-between pb-0 5'>
            <Link href={`/profile/${userId}`}>
              <span className='font-bold hover:underline cursor-pointer'>
                {name}
              </span>
            </Link>

            <button className='border text-[15px] px-[21px] py-0.5 border-[#f02c56] text-[#f02c56] hover:bg-[#ffeef2] font-semibold rounded-md'>
              Seguir
            </button>
          </div>
          <p className='text-[15px] pb-0.5 break-words md:max-w-[400px] max-w-[300px]'>{title}</p>
          <p className='text-[14px] pb-0.5 flex items-center font-semibold'>
            <ImMusic
              size={17}
            />
            <span className='px-1'>original sound - {name}</span>
          </p>

          <div className='mt-2.5 flex'>
            <div className='relative min-h-[480px] max-h-[580px] max-w-[260px] flex items-center bg-black rounded-xl cursor-pointer'>
              <video
                id={`video-${id}`}
                src={videoUrl}
                loop
                muted
                controls
                className='rounded-xl object-cover mx-auto h-full'
              />

              <Image
                src='/tiktok-logo-white.png'
                alt='Marca de agua'
                width={90}
                height={90}
                className='absolute right-2 bottom-10'
              />
            </div>
            <PostMainLikes
              id={id}
              userId={userId}
            />
          </div>
        </div>
      </div>
    </>
  )
}
