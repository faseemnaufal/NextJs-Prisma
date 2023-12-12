import { Poppins } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })

export const metadata = {
  title: 'NextJS App',
  description: 'Generated by fasee',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className='mx-w-4xl mx-auto px-5'>
          <Header />
        {children}
        <Footer />
        </div>
        </body>
    </html>
  )
}
