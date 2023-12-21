import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Bebas_Neue } from 'next/font/google'
import './globals.css'


// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Amplify config
import ConfigureAmplifyClientSide from '@/app/ConfigureAmplifyClientSide';

const inter = Inter({ subsets: ['latin'] });

const bebas = Bebas_Neue({ 
  subsets: ['latin'], 
  weight: '400',
})

export const metadata: Metadata = {
  title: {
    default: "Bytecho",
    template: "%s - Bytecho"
  },
  description: "Experience expert web design services in Australia, tailored to elevate your website's SEO and increase web traffic. Trust our expertise in boosting online visibility.",
  openGraph: {
    images: [
        {
            url: 'https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png'
        }
    ]
  },
  twitter: {
    card: "summary_large_image"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <ConfigureAmplifyClientSide />
          <Header />
          {children}
          <Footer />
        </>
      </body>
    </html>
  )
}
