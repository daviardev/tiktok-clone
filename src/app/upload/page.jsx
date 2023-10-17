'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import UploadLayout from '../layouts/includes/UploadLayout'

import { AiOutlineCheckCircle } from 'react-icons/ai'
import { PiKnifeLight } from 'react-icons/pi'
import { BiLoaderCircle, BiSolidCloudUpload } from 'react-icons/bi'

export default function Upload () {
  const router = useRouter()

  const [caption, setCaption] = useState('')
  const [fileDisplay, setFileDisplay] = useState('')

  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const [isUploading, setIsUploading] = useState(false)

  const OnChange = e => {
    const files = e.target.files

    if (files && files.length > 0) {
      const file = files[0]
      const fileUrl = URL.createObjectURL(file)
      setFileDisplay(fileUrl)
      setFile(file)
    }
  }

  const Discard = () => {
    setFileDisplay(0)
    setFile(null)
    setCaption('')
  }

  const ClearVideo = () => {
    setFileDisplay('')
    setFile(null)
  }

  const CreateNewPost = () => {
    window.alert('Video publicado')
  }

  return (
    <>
      <UploadLayout>
        <div className='w-full mt-[80px] mb-[40px] bg-white shadow-lg rounded-md py-6 md:px-10 px-4'>
          <div>
            <h1 className='text-[23px] font-semibold'>Cargar video</h1>
            <h2 className='text-gray-400 mt-1'>Publica un video en tu cuenta</h2>
          </div>

          <div className='mt-8 md:flex gap-6'>

            {
            !fileDisplay
              ? (
                <label htmlFor='fileInput' className='md:mx-0 mx-auto mt-4 mb-6 flex flex-col items-center justify-center w-full max-w-[260px] h-[470px] text-center p-3 border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer'>

                  <BiSolidCloudUpload
                    size='40'
                    color='#b3b3b1'
                  />

                  <p className='mt-4 text-[17px]'>Selecciona el video para cargar</p>
                  <p className='mt-1.5 text-gray-500 text-[13px]'>O arrastra y suelta un archivo</p>
                  <p className='mt-12 text-gray-400 text-sm'>MP4 o WebM</p>
                  <p className='mt-2 text-gray-400 text-[13px]'>Resolución de al menos 720x1280</p>
                  <p className='mt-2 text-gray-400 text-[13px]'>Hasta 10 minutos</p>
                  <p className='mt-2 text-gray-400 text-[13px]'>Menos de 10 GB</p>

                  <label
                    htmlFor='fileInput'
                    className='px-2 py-1.5 mt-8 text-white text-[15px] w-[80%] bg-[#f02c56] rounded-sm cursor-pointer'
                  >
                    Selecciona un archivo
                  </label>
                  <input
                    id='fileInput'
                    type='file'
                    hidden
                    accept='.mp4'
                    onChange={OnChange}
                  />
                </label>
                )
              : (
                <div className='md:mx-0 mx-auto mt-4 md:mb-12 mb-16 flex items-center justify-center w-full max-w-[260px] h-[540px] p-3 rounded-2xl cursor-pointer relative'>
                  {isUploading
                    ? (
                      <div className='absolute flex items-center justify-center z-20 bg-black h-full w-full rounded-[50px] bg-opacity-50'>
                        <div className='mx-auto flex items-center justify-center gap-1'>
                          <BiLoaderCircle
                            size={30}
                            color='#f12b56'
                            className='animate-spin'
                          />
                          <span className='text-white font-bold'>Subiendo...</span>
                        </div>
                      </div>
                      )
                    : null}
                  <Image
                    src='/mobile-case.png'
                    alt='Case de teléfono'
                    width={280}
                    height={280}
                    className='absolute z-20 pointer-events-none'
                  />
                  <Image
                    src='/tiktok-logo-white.png'
                    alt='Marca de agua de TikTok'
                    width={90}
                    height={90}
                    className='absolute right-4 bottom-6 z-20'
                  />

                  <video
                    src={fileDisplay}
                    loop
                    muted
                    autoPlay
                    className='absolute rounded-xl object-cover z-10 p-[13px] w-full h-full'
                  />

                  <div className='absolute -bottom-12 flex items-center justify-between z-50 rounded-xl border w-full p-2 border-gray-300'>
                    <div className='flex items-center truncate'>
                      <AiOutlineCheckCircle
                        size={16}
                        className='min-w-[16px]'
                      />
                      <span className='text-[11px] pl-1 truncate text-ellipsis'>
                        {file ? file.name : ''}
                      </span>
                    </div>
                    <button className='text-[11px] ml-2 font-semibold' onClick={() => ClearVideo()}>Cambiar</button>
                  </div>
                </div>
                )
}

            <div className='mt-4 mb-6'>
              <div className='flex bg-[#f8f8f8] py-4 px-6'>
                <i>
                  <PiKnifeLight
                    size={20}
                    className='mr-4'
                  />
                </i>
                <div>
                  <p className='text-semibold text-[15px] mb-1.5'>Divide vídeos y edítalos</p>
                  <p className='text-semibold text-[13px] text-gray-400'>
                    Puedes dividir rápidamente vídeos en varias partes, eliminar partes redundantes y convertir vídeos apaisados en vídeos verticales.
                  </p>
                </div>
                <div className='flex justify-end max-w-[130px] w-full h-full text-center my-auto'>
                  <button className='px-8 py-1.5 text-white text-[15px] bg-[#F02C56] rounded-sm'>
                    Editar
                  </button>
                </div>
              </div>

              <div className='mt-5'>
                <div className='flex items-center justify-between'>
                  <span className='mb-1 text-[15px]'>Descripción</span>
                  <span className='text-gray-400 text-[12px]'>{caption.length}/150</span>
                </div>
                <input
                  maxLength={150}
                  type='text'
                  className='w-full border p-2.5 rounded-md focus:outline-none'
                  value={caption}
                  onChange={e => setCaption(e.target.value)}
                />
              </div>
              <div className='flex gap-3'>
                <button
                  disabled={isUploading}
                  onClick={() => Discard()}
                  className='px-10 py-2.5 mt-8 border text-[16px] hover:bg-gray-100 rounded-sm'
                >
                  Descartar
                </button>
                <button
                  disabled={isUploading}
                  onClick={() => CreateNewPost()}
                  className='px-10 py-2.5 mt-8 border text-[16px] text-white bg-[#f02c56] rounded-sm'
                >
                  {
                  isUploading
                    ? <BiLoaderCircle
                        clasName='animate-spin'
                        color='#ffffff'
                        size={25}
                      />
                    : 'Publicar'
                  }
                </button>
              </div>
              {error
                ? (
                  <p className='text-red-600 mt-4'>{error.message}</p>
                  )
                : null}
            </div>
          </div>
        </div>
      </UploadLayout>
    </>
  )
}
