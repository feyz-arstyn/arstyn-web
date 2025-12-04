import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://www.arstyn.com'),
  title: 'Arstyn - Build bold products',
  description: 'Clean, modern web experiences with real performance. We craft reliable, maintainable web products—polished frontends, robust APIs, and thoughtful UX.',
  icons: {
    icon: [
      { url: '/Logo.ico' },
      { url: '/Logo-gradient.png', type: 'image/png' },
    ],
    apple: [
      { url: '/Logo-gradient.png' },
    ],
  },
  openGraph: {
    title: 'Arstyn - Build bold products',
    description: 'Clean, modern web experiences with real performance.',
    url: 'https://www.arstyn.com',
    siteName: 'Arstyn',
    images: [
      {
        url: '/Logo-gradient.png',
        width: 800,
        height: 600,
        alt: 'Arstyn Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Arstyn',
    url: 'https://www.arstyn.com',
    logo: 'https://www.arstyn.com/Logo-gradient.png',
    sameAs: [
      'https://www.linkedin.com/company/arstyn',
      'https://twitter.com/arstyn',
      'https://github.com/arstyn',
    ],
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}

