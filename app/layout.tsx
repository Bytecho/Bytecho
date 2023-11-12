import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Bebas_Neue } from 'next/font/google'
import './globals.css'

// Components
import Header from './components/Header'
import Footer from './components/Footer'


const inter = Inter({ subsets: ['latin'] });

const bebas = Bebas_Neue({ 
  subsets: ['latin'], 
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Bytecho',
  description: "Experience expert web design services in Australia, tailored to elevate your website's SEO and increase web traffic. Trust our expertise in boosting online visibility.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
