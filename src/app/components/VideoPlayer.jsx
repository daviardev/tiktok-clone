'use client'

import { useRef, useState } from 'react'

import VideoPlayerActions from './Sidebar'

export default function VideoPlayer ({ src }) {
  const [playing, setPlaying] = useState(false)
  const video = useRef(null)

  const HandlePlay = () => {
    if (video.current) {
      playing
        ? video.current.pause()
        : video.current.play()

      setPlaying(!playing)
    }
  }

  return (
    <>
      <div className='video'>
        <video
          src={src}
          controls={false}
          ref={video}
          loop
          className='w-full h-full rounded-xl object-cover'
        />
        <button
          className='w-16 h-16 absolute m-auto border-0 inset-0'
          style={{
            backgroundImage: 'url(/images/player.png)',
            backgroundSize: 'contain',
            backgroundColor: 'transparent',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
          }}
          onClick={HandlePlay}
        />
        <VideoPlayerActions />
      </div>
    </>
  )
}
