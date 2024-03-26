import Link from 'next/link'

import { Home, Friends, Upload, Inbox, Profile } from './Svg'

export default function Footer () {
  return (
    <>
      <div className='w-full justify-evenly text-sm text-black bg-white rounded-full p-2 gap-5 bottom-0'>
        <div className='flex justify-between items-center'>
          <Link href='/'>
            <div className='flex flex-col items-center'>
              <Home />
              <span>Home</span>
            </div>
          </Link>
          <Link href='/friends'>
            <div className='flex flex-col items-center'>
              <Friends />
              <span>Friends</span>
            </div>
          </Link>
          <Link href='/upload'>
            <div className='flex flex-col items-center'>
              <div className='w-[fit-content] flex items-center justify-center my-0 mx-auto top-2/4 left-2/4'>
                <Upload />
              </div>
            </div>
          </Link>
          <Link href='/inbox'>
            <div className='flex flex-col items-center'>
              <Inbox />
              <span>Inbox</span>
            </div>
          </Link>
          <Link href='/profile[1]'>
            <div className='flex flex-col items-center'>
              <Profile />
              <span>Profile</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
