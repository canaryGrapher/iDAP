import React from 'react'
import './globals.css'

import Sidebar from 'components/general/Sidebar'

function MainLayout({ children }) {
  return (

    <div className='flex'>
      <Sidebar />
      <div className='p-8 w-full bg-white'>{children}</div>
    </div>
  )
}

export default MainLayout
