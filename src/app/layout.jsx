import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arstyn - Build bold products',
  description: 'Clean, modern web experiences with real performance. We craft reliable, maintainable web products—polished frontends, robust APIs, and thoughtful UX.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

