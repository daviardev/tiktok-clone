import './globals.css'

import Footer from './components/Footer'
import Header from './components/Header'

export const metadata = {
  title: 'TikTok - Make Your Day',
  description: 'TikTok Clone NextJS - Firebase'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='shadow-filter'>
          <main className='flex bg-[url(/images/iphone.webp)] bg-no-repeat bg-contain w-[320px] h-[640px] relative'>
            <section className='w-full rounded-[32px] flex gap-3 flex-col relative px-1.5 py-4 m-6'>
              <div className='absolute bg-white inset-0 -z-10 rounded-[32px]' />
              <Header />
              <div className='relative w-full h-full mx-auto my-0'>
                <article className='absolute inset-0 w-full h-full z-20'>
                  {children}
                </article>
              </div>
              <Footer />
            </section>
          </main>
        </div>
      </body>
    </html>
  )
}
