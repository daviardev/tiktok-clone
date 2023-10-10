import { usePathname, useRouter } from 'next/navigation'

import { FiLogOut } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiSearch, BiUser } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'

import Image from 'next/image'
import Link from 'next/link'

export default function NavBar () {
  const path = usePathname()

  const handleSearchUser = event => {
    console.log('Vas a buscar el usuario', event.target.value)
  }

  const goTo = () => {
    window.alert('Free')
  }

  return (
    <>
      <div className='fixed bg-white z-30 flex items-center w-full border-b h-[60px]'>
        <div className={`flex items-center justify-between w-full px-6 mx-auto ${path === '/' ? 'max-w-[100%]' : ''}`}>

          <div className='flex items-center lg:min-w-[300px]'>
            <Link href='/'>
              <Image
                src='/tiktok-logo.png'
                alt='Logo de TikTok'
                width={100}
                height={100}
                className='min-w-[115px] w-[115px] relative'
              />
            </Link>
          </div>

          <div className='relative hidden md:flex items-center justify-end p-1 rounded-full max-w-[430px] w-full'>
            <div className='hover:bg-gray-100 rounded-full flex w-full h-full'>
              <input
                type='search'
                placeholder='Buscar'
                onChange={handleSearchUser}
                className='w-full pl-3 my-2 bg-transparent placeholder-[#838383] text-[15px] focus:outline-none'
              />

              <div className='px-3 py-1 flex items-center border-l border-l-gray-300'>
                <BiSearch
                  color='#161823'
                  size='22'
                />
              </div>
            </div>
            <div className='absolute bg-white max-w-[910px] h-auto w-full z-20 left-0 top-12 border p-1'>
              <div className='p-1'>
                <Link
                  href='/profile/1'
                  className='flex items-center justify-between w-full cursor-pointer hover:bg-[#f12b56] p-1 px-2 hover:text-white'
                >
                  <div className='flex items-center'>
                    <Image
                      src='/placeholder-user.jpg'
                      alt='Usuario: tal'
                      width={40}
                      height={40}
                      className='rounded-md'
                    />
                    <div className='truncate ml-2'>
                      Daviardev
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <button
              onClick={() => goTo()}
              className='flex items-center border rounded-sm justify-center h-[36px] hover:bg-gray-100 px-4 py-0'
            >
              <AiOutlinePlus
                color='black'
                size='22'
              />
              <span className='px-2 font-bold text-[16px]'>
                Cargar
              </span>
            </button>

            {!true
              ? (
                <div className='flex items-center'>
                  <button className='flex items-center bg-[#f02c56] text-white border rounded-md px-0 py-[6px]'>
                    <span className='whitespace-nowrap mx-2.5 font-bold text-base'>
                      Iniciar sesión
                    </span>
                  </button>

                  <div className='flex items-center'>
                    <BsThreeDotsVertical
                      color='#161724'
                      size='27'
                      className='ml-4 relative cursor-pointer px-0 py-1'
                    />

                  </div>
                </div>
                )
              : (
                <div className='flex items-center'>
                  <div className='relative'>
                    <button className='mt-1 border border-gray-200 rounded-full'>
                      <Image
                        src='/placeholder-user.jpg'
                        width={100}
                        height={100}
                        alt='Avatar user'
                        className='rounded-full w-[35px] h-[35px]'
                      />
                    </button>

                    <div className='bg-white right-4 absolute z-30 shadow-md rounded-lg top-[calc(100%+12px)]'>
                      <ul className='font-semibold text-base px-0 py-2 m-0 min-w-[223px] text-[#161823]'>
                        <button className='list'>
                          <BiUser
                            size='1em'
                            className='mr-2 w-5 h-5'
                          />
                          Mi perfil
                        </button>
                        <button className='list'>
                          <FiLogOut
                            size='1em'
                            className='mr-2 w-5 h-5'
                          />
                          Cerrar sesión
                        </button>
                      </ul>
                    </div>
                  </div>
                </div>
                )}
          </div>
        </div>
      </div>
    </>
  )
}
