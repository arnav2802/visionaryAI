import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import { Toaster } from '@/components/ui/toaster'
import React from 'react'
<<<<<<< HEAD

=======
>>>>>>> 987e2f658021e20c5ae0bd7d9d7b215d167cc536

const Layout = ({ children }: { children: React.ReactNode}) => {
  return (
     <main className='root'> 
        <Sidebar />
        <MobileNav />
<<<<<<< HEAD
        
=======
>>>>>>> 987e2f658021e20c5ae0bd7d9d7b215d167cc536

        <div className='root-container'>
            <div className='wrapper'>

                {children}
            </div>
        </div>
        <Toaster />
     </main>
  )
}

export default Layout