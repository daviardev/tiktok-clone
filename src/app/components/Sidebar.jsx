import Link from 'next/link'
import { usePathname } from 'next/navigation'

import MenuItem from './MenuItem'
import CLientOnly from './ClientOnly'
import MenuItemFollow from './MenuItemFollow'

export default function Sidebar () {
  const path = usePathname()
  return (
    <>
      <aside className={`fixed z-20 bg-white pt-[70px] h-full lg:border-r-0 border-r w-[75px] overflow-auto ${path === '/' ? 'lg:w-[240px]' : 'lg:w-[220px]'}`}>
        <div className='lg:w-full w-[55px] mx-auto'>
          <Link href='/'>
            <MenuItem
              iconString='Para ti'
              colorString={path === '/' ? '#f02c56' : ''}
              sizeString='25'
            />
          </Link>

          <MenuItem
            iconString='Siguiendo'
            colorString={path === '/' ? '#000000' : ''}
            sizeString='25'
          />

          <MenuItem
            iconString='Explorar'
            colorString={path === '/' ? '#000000' : ''}
            sizeString='25'
          />

          <MenuItem
            iconString='LIVE'
            colorString={path === '/' ? '#000000' : ''}
            sizeString='25'
          />

          <div className='border-b border-[rgba(22,24,35,.12)] lg:ml-2 mt-2' />
          <h3 className='lg:block hidden text-sm text-[rgba(22,24,35,.75)] px-0 py-2 font-semibold'>
            Cuentas sugeridas
          </h3>

          <div className='lg:hidden block pt-3' />
          <CLientOnly>
            <div className='cursor-pointer'>
              <MenuItemFollow
                id='1'
                name='daviardev'
                avatar='/placeholder-user.jpg'
              />
            </div>
          </CLientOnly>

          <button
            className='lg:block hidden text-[#f02c56] pt-1.5 pl-2 text-[13px] font-bold leading-[18px]'
          >
            Ver todo
          </button>

          {true
            ? (
              <div>
                <div className='border-b border-[rgba(22,24,35,.12)] lg:ml-2 mt-2' />
                <h3 className='lg:block hidden text-sm text-[rgba(22,24,35,.75)] px-0 py-2 font-semibold'>
                  Cuentas que sigues
                </h3>

                <div className='lg:hidden block pt-3' />
                <CLientOnly>
                  <div className='cursor-pointer'>
                    <MenuItemFollow
                      id='1'
                      name='daviardev'
                      avatar='/placeholder-user.jpg'
                    />
                  </div>
                </CLientOnly>

                <button
                  className='lg:block hidden text-[#f02c56] pt-1.5 pl-2 text-[13px] font-bold leading-[18px]'
                >
                  Ver más
                </button>
              </div>
              )
            : null}
          <div className='lg:block hidden border-b lg:ml-2 mt-2' />

          <div className='lg:block hidden text-[11px] text-gray-500'>
            <p className='pt-4 px-2 hover:underline cursor-pointer'>
              Acerca de Sala de prensa Contactos Vacantes
            </p>
            <p className='pt-4 px-2 hover:underline cursor-pointer'>
              TikTok for Good Publicidad Developers Transparencia TikTok Bonus TikTok Embeds
            </p>
            <p className='pt-4 px-2 hover:underline cursor-pointer'>
              Ayuda Seguridad Términos Privacidad Portal de creadores Normas de la comunidad
            </p>
            <p className='pt-4 px-2'>
              © 2023 TikTok
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}
