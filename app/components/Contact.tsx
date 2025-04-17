import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'motion/react'

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "78c4f09e-7d58-41df-8225-d1bec9c00f47");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
      id='contact'
      className='w-full px-[12%] py-20 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      <motion.h4
        className='text-center mb-2 text-lg font-Poppins'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        Connect with me
      </motion.h4>
      <motion.h2
        className='text-center text-5xl font-Poppins'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}>
        Get in touch
      </motion.h2>
      <motion.p
        className='text-center  max-w-2xl mx-auto mt-5 mb-12 font-Poppins text-gray-600 dark:text-white'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}>
        {`I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.`}
      </motion.p>
      <motion.form
        onSubmit={onSubmit}
        className='max-w-2xl mx-auto'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
          <motion.input
            type="text"
            placeholder='Enter your name'
            required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
            name='name'
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          />
          <motion.input
            type="email"
            placeholder="Enter your email"
            required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
            name='email'
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          />
        </div>
        <motion.textarea
          rows={6}
          placeholder='Enter your message'
          required
          className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90'
          name='message'
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        ></motion.textarea>
        <motion.button
          type='submit'
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Submit now
          <Image src={assets.right_arrow_white} alt='' className='w-4' />
        </motion.button>
        <p className='mt-4'>{result}</p>
      </motion.form>
    </motion.div>
  )
}

export default Contact