import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineCheck } from 'react-icons/ai'

export default function MenuItemFollow ({ id, name, avatar }) {
  return (
    <>
      <Link
        href={`/profile/${id}`}
        className='flex items-center hover:bg-gray-100 w-full py-1.5 px-2'
      >
        <Image
          src={avatar}
          width={35}
          height={35}
          className='rounded-full lg:mx-0 mx-auto'
        />
        <div className='lg:pl-2.5 lg:block hidden'>
          <div className='flex items-center'>
            <p className='font-bold text-[14px] truncate'>
              {name}
            </p>
            <span className='ml-1 rounded-full bg-[#58d5ec] h-[14px] relative'>
              <AiOutlineCheck
                size='15'
                color='#ffffff'
                className='relative p-[3px]'
              />
            </span>
          </div>
          <p className='font-light text-[12px] text-gray-600'>
            {name}
          </p>
        </div>
      </Link>
    </>
  )
}
