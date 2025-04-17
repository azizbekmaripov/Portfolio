import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'motion/react';
import { MdOutlineDoneOutline } from "react-icons/md";
import loading from '../../public/loading.json';

const Work = ({ isDarkMode }: {isDarkMode:boolean}) => {
  const MotionLink = motion(Link);
  return (
    <motion.div
      id='work'
      className='w-full px-[12%] py-20 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className='text-center mb-2 text-lg font-Poppins'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        My portfolio
      </motion.h4>
      <motion.h2
        className='text-center text-5xl font-Poppins'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My latest work
      </motion.h2>
      <motion.p
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Poppins text-gray-600 dark:text-white'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
      </motion.p>
      <motion.div
        className='grid grid-cols-auto my-10 gap-5 dark:text-black'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden"
            style={{ backgroundImage: `url(${project.bgImage})` }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-lg">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
              {index === 0 ? (
                <Lottie animationData={loading} className="w-12" />
              ) : (
                <MdOutlineDoneOutline className="text-green-500 w-6 h-6" />
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
      <MotionLink
        href="/"
        className="w-max flex items-center justify-center gap-3 px-10 py-2.5 my-20 mx-auto border border-gray-500 rounded-full font-Poppins dark:text-white dark:border-white dark:hover:bg-darkHover"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        Show more{" "}
        <Image
          src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4"
        />
      </MotionLink>
    </motion.div>
  );
};

export default Work;
