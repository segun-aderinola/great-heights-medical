import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Great Height Medical',
  description: 'Great Heights Medical is a modern, patient-centered clinic offering personalized healthcare solutions with advanced technology and compassionate care.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
