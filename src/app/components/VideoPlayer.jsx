'use client'

import { useState, useRef } from 'react'

import clsx from 'clsx'

export default function VideoPlayer ({ author, description, albumCover, songName, src, avatar }) {
  const [playing, setPlaying] = useState(false)
  const video = useRef(null)

  const HandlePlay = () => {
    const { current: videoElement } = video

    if (!videoElement || !(videoElement instanceof window.HTMLVideoElement)) {
      console.error('This element video is invalid.')
      return
    }

    const isPlaying = !videoElement.paused

    isPlaying
      ? videoElement.pause()
      : videoElement.play()

    setPlaying(!isPlaying)
  }

  return (
    <>
    </>
  )
}
