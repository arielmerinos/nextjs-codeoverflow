import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavContent from './NavContent'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { SignedOut } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <Image src='/assets/icons/hamburger.svg' alt='Menu' width={36} height={36} className='invert-colors sm:hidden'/>
        </SheetTrigger>
        <SheetContent side='left' className='background-light900_dark200 border-none'>
            <Link href='/' className='flex items-center gap-1'>
                <Image
                src='/assets/images/site-logo.svg'
                width={23}
                height={23}
                alt='OverflowDev Logo'
                />
                <p className='h2-bold text-dark-100_light900 font-spaceGrotesk dark:text-light-900 '> Dev <span className='text-primary-500'>Overflow</span></p>
            </Link >
            <div>
              <SheetClose asChild>
                <NavContent /> 
              </SheetClose>

              <SignedOut>
                <div className='flex flex-col gap-3'>
                  <SheetClose asChild>
                    <Link href='/sign-in'>
                      <Button className=' w-full small-medium btn-secondary min-h-[41px] rounded-lg px-4 py-3 shadow-none'>
                        <span className='primary-text-gradient'>Log In </span>
                      </Button>
                    </Link>  
                  </SheetClose>

                  <SheetClose asChild>
                    <Link href='/sign-'>
                      <Button className='w-full small-medium light-border-2 btn-tertiary min-h-[41px] text-dark400_light900 rounded-lg px-4 py-3 shadow-none'>
                        <span className='text-dark400_light900'>Sign Up </span>
                      </Button>
                    </Link>  
                  </SheetClose>
                </div>
              </SignedOut>
            </div>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav