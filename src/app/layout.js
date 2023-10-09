import './globals.css'

export const metadata = {
  title: 'TikTok - Make Your Day',
  description: 'Clon de TikTok con Next.js y AppWrite'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body>{children}</body>
    </html>
  )
}
