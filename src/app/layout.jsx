
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './komponen/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Weeboy',
  description: 'WEBSITE ANIME INDONESIA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-color-dark`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
