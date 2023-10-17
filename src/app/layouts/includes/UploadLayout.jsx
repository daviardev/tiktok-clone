import NavBar from './NavBar'

export default function UploadLayout ({ children }) {
  return (
    <div className='bg-[#f8f8f8] h-[100vh]'>
      <NavBar />
      <div className='flex justify-between mx-auto w-full px-2 max-w-[1140px]'>
        {children}
      </div>
    </div>
  )
}
