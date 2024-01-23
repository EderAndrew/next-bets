import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/page'
import Footer from '@/components/footer/page'
import { Web3Modal } from '@/context/Web3Modal'

const roboto = Roboto({ 
  weight: '400',
  subsets: ['latin'], 
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Next-Bets',
  description: 'A simple app to manage your bets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Web3Modal>
          <Header />
            {children}
          <Footer />
        </Web3Modal> 
      </body>
    </html>
  )
}
