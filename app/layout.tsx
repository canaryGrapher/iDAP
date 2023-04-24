import { FetchConfig } from 'http-react'
import './globals.css'

import Sidebar from 'components/general/Sidebar'

function MainLayout({ children }) {
  return (
    <FetchConfig baseUrl='/api'>
      <html data-theme='light'>
        <head>
          <title>ScoutSherpa | Guided tours</title>
          <meta name='description' content='ScoutSherpa helps you make guided tours easily and efficiently, so you worry less about your users getting lost while they navigate your website' />
        </head>
        <body>
          <div className='flex'>
            <Sidebar />
            <div className='p-8 bg-red-300 w-full'>{children}</div>
          </div>
        </body>
      </html>
    </FetchConfig>
  )
}

export default MainLayout
