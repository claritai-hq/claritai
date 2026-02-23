import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Claritai - AI Spend Tracker',
  description: 'See every dollar your team spends on AI. Before the invoice lands.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}