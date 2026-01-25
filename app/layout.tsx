import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: 'Parth Joshi | Full Stack Developer',
  description: 'Full Stack Developer specializing in building exceptional digital experiences. Expert in React, Node.js, TypeScript, and modern web technologies.',
  keywords: ['Full Stack Developer', 'Software Engineer', 'React Developer', 'Node.js Developer', 'TypeScript', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Parth Joshi' }],
  creator: 'Parth Joshi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Parth Joshi | Full Stack Developer',
    description: 'Full Stack Developer specializing in building exceptional digital experiences.',
    siteName: 'Parth Joshi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parth Joshi | Full Stack Developer',
    description: 'Full Stack Developer specializing in building exceptional digital experiences.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
icons: {
  icon: '/icon.svg', 
},
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
