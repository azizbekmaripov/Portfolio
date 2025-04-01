import {  infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react";
import userImage from '../../assets/user-imagee.png'

const About = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <motion.div
      id='about'
      className='w-full px-[12%] py-20 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className='text-center mb-2 text-lg font-Poppins'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        Inroduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Poppins'
      >
        About me
      </motion.h2>
      <motion.div
        className={`flex w-full flex-col lg:flex-row items-center gap-20 my-20`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className='w-96 sm:W-80 rounded-3xl max-w-none'
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}>
          <Image src={userImage} alt='user' className='w-full rounded-3xl' />
          
        </motion.div>
        
        <motion.div
          className='flex-1'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}>
          <p className={`mb-10 max-w-2x1 font-Poppins text-gray-600 dark:text-white`}>I am a young programmer Frontend Developer, I am 18 years old and have half a year of experience in programming, I think that I currently have enough skills and enough knowledge to work in the field of programming. One of my biggest goals is to build my own world.</p>
          <motion.ul
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover'
                whileInView={{ scale: 1.05 }}>
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
            className='my-6 text-gray-700 font-Poppins dark:text-white'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}>There are tools that I usually use</motion.h4>
          <motion.ul
            className='flex item-center gap-3 sm:gap-5'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}>
            {toolsData.map((tool, index) => (
              <motion.li
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-200 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                key={index}
                whileInView={{scale:1.05}}>
                
                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About