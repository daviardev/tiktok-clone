import Link from 'next/link'

import { AiFillHome, AiOutlineCompass } from 'react-icons/ai'
import { IoIosAdd } from 'react-icons/io'
import { BiMessageMinus } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'

export default function Footer () {
  return (
    <>
      <div style={{
        width: '72.6%',
        display: 'flex',
        justifyContent: 'space-evenly',
        color: 'white',
        fontSize: '2rem',
        backgroundColor: 'black',
        padding: '20px',
        borderTop: '2px solid white',
        borderRadius: '0 0 20px 20px',
        gap: '40px',
        marginLeft: '47px'
      }}
      >
        <AiFillHome />
        <AiOutlineCompass />
        <div className='w-[45px] bg-white text-black flex justify-center items-center rounded-[.4rem]'>
          <IoIosAdd
            style={{ color: 'black' }}
          />
        </div>
        <BiMessageMinus />
        <BsPerson />
      </div>
    </>
  )
}
