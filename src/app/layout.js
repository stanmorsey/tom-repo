import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tom Lee Osborn',
  description: 'This is a portfolio for Tom L. Osborn that best describes everything about him and all his aspects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><header></header> {children}</body>
    </html>
  )
}
