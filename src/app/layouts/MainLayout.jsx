import { usePathname } from 'next/navigation'
import NavBar from './includes/NavBar'
import Sidebar from '../components/Sidebar'

export default function MainLayout ({ children }) {
  const path = usePathname()
  return (
    <>
      <NavBar />
      <div className={`flex justify-between mx-auto w-full lg:px-2.5 px-0 ${path === '/' ? 'max-w-full' : ''}`}>
        <Sidebar />
        {children}
      </div>
    </>
  )
}
