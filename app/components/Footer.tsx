import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = ({isDarkMode, }) =>{
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <h1 className='font-Montserrat font-bold text-2xl'>AZIZ.DEV</h1>
        <div className='w-max flex items-center gap-2 mx-auto'>
        <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
          azizbekmaripovv@gmail.com
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Azizbek Maripov. All rights reserved.</p>
        <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
          <li><Link target='_blank' href={"https://github.com/azizbekmaripov"}>Github</Link></li>
          <li><Link target='_blank' href={"https://t.me/azizbekmaripov"}>Telegram</Link></li>
          <li><Link target='_blank' href={"https://www.linkedin.com/in/azizbek-maripov-16b731278"}>Linkedin</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer