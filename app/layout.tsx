import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '../app/navBar/page'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ניב פורת פיתוח אתרים',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={inter.className}>

      <NavBar/>

      {children}




      </body>
    </html>
  )
}
