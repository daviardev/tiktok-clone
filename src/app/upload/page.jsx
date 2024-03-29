'use client'

import { useState } from 'react'

import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BiCloudUpload } from 'react-icons/bi'

export default function Upload () {
  const [caption, setCaption] = useState('')
  const [fileDisplay, setFileDisplay] = useState('')

  const [file, setFile] = useState(null)

  const OnChange = e => {
    const files = e.target.files

    if (files && files.length > 0) {
      const file = files[0]
      const fileURL = URL.createObjectURL(file)
      setFileDisplay({ name: file.name, url: fileURL })
      setFile(file)
    }
  }

  const HandleDrop = e => {
    e.preventDefault()

    const file = e.dataTransfer.files[0]
    if (file) {
      const fileUrl = URL.createObjectURL(file)
      setFileDisplay({ name: file.name, url: fileUrl })
      setFile(file)
    }
  }

  const HandleDragOver = e => {
    e.preventDefault()
  }

  const HandleDragEnter = e => {
    e.preventDefault()
  }

  const HandleDragLeave = e => {
    e.preventDefault()
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
    window.alert('Video uploaded')
  }
  return (
    <>
      <div className='py-12 px-2.5'>

        <h1 className='text-[18px] font-semibold'>Load video</h1>
        <h2 className='text-gray-400 mt-1 text-[12px]'>Post a video to your account</h2>

        {!fileDisplay
          ? (
            <label
              htmlFor='fileInput'
              onDrop={HandleDrop}
              onDragOver={HandleDragOver}
              onDragEnter={HandleDragEnter}
              onDragLeave={HandleDragLeave}
              className='
                    flex
                    flex-row
                    items-center
                    justify-start
                    mx-auto
                    mt-2
                    mb-4
                    w-full
                    h-[100px]
                    text-center
                    p-2
                    border-2
                    border-dashed
                    border-gray-300
                    rounded-lg
                    hover:bg-gray-100
                    cursor-pointer
                '
            >
              <BiCloudUpload size='30' color='#b3b3b1' />
              <div className='ml-4'>
                <p className='text-[12px]'>Select the video to load</p>
                <p className='text-gray-500 text-[10px]'>Or drag and drop file</p>
              </div>

              <label
                htmlFor='fileInput'
                className='
                    ml-4
                    p-1
                    mt-0
                    text-white
                    text-[13px]
                    bg-[#f02c56]
                    rounded-sm
                    cursor-pointer
                    leading-3
                  '
              >
                Select a file
              </label>
              <input
                id='fileInput'
                type='file'
                hidden
                accept='video/*'
                onChange={OnChange}
              />
            </label>
            )
          : (
            <div className='mx-auto mt-2 mb-4 w-full h-[500px] p-2 rounded-2xl cursor-pointer relative'>
              {/* Load video section dynamic island */}
              <div className='absolute flex items-center justify-between rounded-xl border w-[94%] p-2 border-gray-300'>
                <div className='flex items-center truncate'>
                  <AiOutlineCheckCircle
                    size={16}
                    className='min-w-[16px]'
                  />
                  <span className='text-[11px] pl-1 truncate text-ellipsis'>
                    {file ? file.name : ''}
                  </span>
                </div>
                <button className='text-[11px] ml-6 font-semibold' onClick={() => ClearVideo()}>Change</button>
              </div>
              <div className='mt-12'>
                <div className='mt-5'>
                  <div className='flex items-center justify-between'>
                    <span className='mb-1 text-[15px]'>
                      Description
                    </span>
                    <span className='text-gray-400 text-[12px]'>{caption.length}/150</span>
                  </div>
                  <input
                    maxLength={150}
                    type='text'
                    className='border p-2.5 rounded-md w-full focus:outline-none'
                    value={caption}
                    onChange={e => setCaption(e.target.value)}
                  />
                </div>
                <div className='flex gap-3'>
                  <button
                      // disabled={isUploading}
                    onClick={() => Discard()}
                    className='px-4 w-full py-2.5 mt-8 border text-[16px] hover:bg-gray-100 rounded-sm'
                  >
                    Discard
                  </button>
                  <button
                      // disabled={isUploading}
                    onClick={() => CreateNewPost()}
                    className='px-4 w-full py-2.5 mt-8 border text-[16px] text-white bg-[#f02c56] rounded-sm'
                  >
                    {/* {isUploading
                      ? <BiLoaderCircle
                        clasName='animate-spin'
                        color='#ffffff'
                        size={25}
                      />
                    : 'Post'
                  } */}
                    Post
                  </button>
                </div>
              </div>
            </div>
            )}
      </div>
    </>
  )
}
