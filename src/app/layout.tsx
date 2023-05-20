import '@style/globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const pageProperties = {
  title: 'mateqaah',
  description: 'mateqaah - An 18-year-old full stack developer',
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
      <head>
        <meta property='og:image' content='/preview.png' />
        <meta property='twitter:image' content='/preview.png' />
        <meta property='twitter:card' content='summary_large_image' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export { pageProperties as metadata }
