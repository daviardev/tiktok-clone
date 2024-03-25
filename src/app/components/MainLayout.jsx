export default function MainLayout ({ children }) {
  return (
    <>
      <div className='h-screen bg-black grid place-items-center'>
        <div className='container'>
          {children}
        </div>
      </div>
    </>
  )
}
