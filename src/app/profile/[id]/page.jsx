'use client'
import Image from 'next/image'

import PostUser from '@/app/components/PostUser'
import MainLayout from '@/app/layouts/MainLayout'
import CLientOnly from '@/app/components/ClientOnly'

import { BsPencilSquare } from 'react-icons/bs'

export default function Profile ({ id, userId, videoUrl, text, createdAt }) {
  const currentUser = {
    id: 123,
    userId: 123,
    name: 'Daviardev',
    avatar: '/placeholder-user.jpg',
    bio: 'Traning Developer ReactJS'
  }
  return (
    <>
      <MainLayout>
        <div className='pt-[90px] ml-[90px] 2xl:pl-[185px] lg:pl-[160px] lg:pr-0 w-[calc(100%-90px)] pr-3 max-w-[1800px] 2xl:mx-auto'>
          <div className='flex w-[calc(100vw-230px)]'>
            <CLientOnly>
              {true
                ? (
                  <Image
                    src={currentUser.avatar}
                    alt='Imagen del usuario'
                    width={100}
                    height={100}
                    className='w-[120px] min-w-[120px] rounded-full'
                  />
                  )
                : (
                  <div className='min-w-[150px] h-[120px] bg-gray-200 rounded-full' />
                  )}
            </CLientOnly>

            <div className='ml-5 w-full'>
              <CLientOnly>
                {currentUser?.name
                  ? (
                    <div>
                      <p className='text-[30px] font-bold truncate'>{currentUser?.name}</p>
                      <p className='text-[18px] truncate'>{currentUser?.name}</p>
                    </div>
                    )
                  : (
                    <div className='h-[60px]' />
                    )}
              </CLientOnly>

              {true
                ? (
                  <button className='flex items-center rounded-md py-1.5 px-3.5 mt-3 text-[15px] font-semibold border hover:bg-gray-100'>
                    <BsPencilSquare
                      size={18}
                      className='mt-0.5 mr-1'
                    />
                    Editar perfil
                  </button>
                  )
                : (
                  <button className='flex items-center rounded-md py-1.5 px-8 mt-3 text-[15px] text-white font-semibold bg-[#f02c56]'>
                    Seguir
                  </button>
                  )}
            </div>
          </div>
          <div className='flex items-center pt-4'>
            <div className='mr-4'>
              <span className='font-bold'>10K</span>
              <span className='text-gray-500 font-light text-[15px] pl-1.5'>Siguiendo</span>
            </div>
            <div className='mr-4'>
              <span className='font-bold'>44K</span>
              <span className='text-gray-500 font-light text-[15px] pl-1.5'>Seguidores</span>
            </div>
          </div>

          <CLientOnly>
            <p className='pt-4 mr-4 text-gray-500 font-light text-[15px] pl-1.5 max-w-[500px]'>
              {currentUser?.bio}
            </p>
          </CLientOnly>

          <ul className='w-full flex items-center pt-4 border-b'>
            <li className='w-60 text-center py-2 text-[17px] font-semibold border-b-2 border-b-black'>Videos</li>
            <li className='w-60 text-gray-500 text-center py-2 text-[17px] font-semibold'>Me gusta</li>
          </ul>

          <CLientOnly>
            <div className='mt-4 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3'>
              <PostUser
                id='123'
                userId='123'
                videoUrl='/No se ve una mondá.mp4'
                text='Mira el nuevo video, seee, estuvo al tiro bien perrón'
              />
            </div>
          </CLientOnly>

          <div className='pb-20' />
        </div>
      </MainLayout>
    </>
  )
}
