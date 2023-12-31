import Navbar from '@/components/shared/navbar/Navbar'
import React from 'react'
import LeftSideBar from '@/components/shared/leftsidebar/LeftSideBar'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='background-light900_dark200 relative'>
        <Navbar />
        <div className='flex'>
            <LeftSideBar/>

            <section className='flex min-h-screen flex-col flex-1 px-6 pb-6 pt-36 max-md:pb-14 sm:px-14'>
                <div className='mx-auto w-full max-w-5xl'>
                    {children}
                </div>
            </section>

            rightsidebar


        </div>
        Toaster

        
    </main>
  )
}

export default Layout