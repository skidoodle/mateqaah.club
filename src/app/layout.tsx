import '@style/globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const pageProperties = {
  twitter: {
    images: [
      {
        url: '/preview.png',
        width: 800,
        height: 600
      }
    ]
  },
  title: 'mateqaah',
  description: 'mateqaah - An 18-year-old full stack developer XD',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
  },
  icons: {
    icon: '/favicon.ico'
  },
  themeColor: '#6d28d9'
}

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <html lang='zxx'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export { pageProperties as metadata }
