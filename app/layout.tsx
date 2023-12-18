import React from 'react'
import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import { ReduxProvider } from '@/app/utilities/store/provider'
import '@/app/utilities/styles/globals.css'
import '@/app/utilities/styles/layout.scss'

// @ts-ignore
const mulish = Mulish({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'iDAP | Admin',
  description: 'Admin portal for iDAP',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={mulish.className}>
        <ReduxProvider>
          <div>{children}</div>
        </ReduxProvider>
      </body>
    </html>
  )
}
