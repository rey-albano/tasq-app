import { Alatsi } from 'next/font/google'
import './globals.css'
import { AuthContextProvider } from './login/_utils/auth-context'
import { BrowserRouter } from 'react-router-dom'

const alatsi = Alatsi({ weight: "400", subsets: ['latin'] })

export const metadata = {
  title: 'Tasq - Listing made easy',
  description: 'Created for CPRG306',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={alatsi.className}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  )
}
