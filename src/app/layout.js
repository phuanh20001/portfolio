import './globals.css'
import { profile } from '@/data/profile'

export const metadata = {
  title: `${profile.name} — Portfolio`,
  description: profile.tagline,
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 antialiased">
        {children}
      </body>
    </html>
  )
}
