import React from 'react'
import Sidebar from '@/app/utilities/components/Sidebar'
import Topnav from '@/app/utilities/components/Topnav'

import "@/app/utilities/styles/layout.scss"

export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (

        <div className="content">
            <nav><Sidebar /></nav>
            <main>
                <div><Topnav /></div>
                <div>{children}</div>
            </main>
        </div>
    )
}
