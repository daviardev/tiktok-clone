'use client'

import PostMain from './components/PostMain'
import MainLayout from './Layouts/MainLayout'
import ClientOnly from './components/ClientOnly'

export default function Home () {
  return (
    <>
      <MainLayout>
        <div className='mt-[80px]  w-[calc(100%-90px)] max-w-[690px] ml-auto'>
          <ClientOnly>
            <PostMain
              id='123'
              name='daviardev'
              avatar='/placeholder-user.jpg'
              uderId='456'
              title='Componentes para una PC GAMER de $7,000 #pcgamer #gaming #gamingpc'
              videoUrl='/video.mp4'
              createdAt='Thu Oct 12 2023 21:58:26 GMT-0500 (hora estándar de Colombia)'
            />
          </ClientOnly>
        </div>
      </MainLayout>
    </>
  )
}
