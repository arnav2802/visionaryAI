import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'
import { Analytics } from "@vercel/analytics/react"

const Layout = ({ children }: { children: React.ReactNode}) => {
  return (
     <main className='root'> 
        <Sidebar />
        <MobileNav />
        <Analytics />

        <div className='root-container'>
            <div className='wrapper'>

                {children}
            </div>
        </div>
     </main>
  )
}

export default Layout