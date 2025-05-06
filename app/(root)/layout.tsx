import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='root'>
<<<<<<< HEAD
      <Sidebar />
      <MobileNav />
=======
      <Sidebar/>
      <MobileNav/>
>>>>>>> 44f0a32452804cbd7587b7a0f7014e65dfd660e6
        <div className="root-Container">
          <div className="wrapper">
            {children}
          </div>
        </div>
    </main>
  )
}

export default Layout