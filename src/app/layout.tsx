import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/Header"
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dine Market',
  description: 'A Market for all your clothing needs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (<>
    <html lang="en">
      <body className={inter.className}>
      <Providers>
      <Header/>
      {children}
      <Footer/>
      </Providers>
      </body>
    </html>
  </>
  )
}
