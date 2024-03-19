export default function MainLayout ({ children }) {
  return (
    <>
      <main className='flex justify-center items-center h-screen bg-white'>
        {children}
      </main>
    </>
  )
}
