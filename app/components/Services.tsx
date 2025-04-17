import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react';

const Services = ({ isDarkMode }: {isDarkMode: boolean}) => {
  return (
    <motion.div
      id='services'
      className='w-full px-[12%] py-28 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      <motion.h4
        className='text-center mb-2 text-lg font-Poppins'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        What I offer
      </motion.h4>
      <motion.h2
        className='text-center text-5xl font-Poppins'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}>
        My Services
      </motion.h2>
      <motion.p
        className='text-center  max-w-2xl mx-auto mt-5 mb-12 font-Poppins text-gray-600 dark:text-white'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}>I am a Frontend Developer from Tashkent, Uzbekistan with 6 months of experience in collaborative projects and freelance development.</motion.p>
      <motion.div
        className='grid grid-cols-auto gap-6 my-10'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}>
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            className='border-[0.5px] border-gray-400 rounded-xl px-8 py-12 cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:bg-darkHover dark:hover:shadow-white'
            whileHover={{ scale: 1.05 }}>
            <Image src={icon} alt='' className='w-10' />
            <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
            <p className='text-sm text-gray-600 leading-5 dark:text-white'>{description}</p>
            <Link href={link} className='flex items-center gap-2 text-sm mt-5'>
              Read more <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow} alt="" className='w-4' />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services