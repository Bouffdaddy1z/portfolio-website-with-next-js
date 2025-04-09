import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        Introduction</h4>
      <h2 className='text-center text 5x` font-Ovo'>
        About Me</h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3x1 max-w-none' >
                <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
            </div>
            <div className='flex-1 '>
                <p>I am an experienced frontend developer with over a decade 
                    of professional experience in the field. I have a strong
                    background in web development, specializing in creating
                    user-friendly and visually appealing websites. My skills
                    include HTML, CSS, JavaScript, and various frontend frameworks.
                    I am passionate about staying up-to-date with the latest
                    industry trends and technologies, and I am always looking for
                    new challenges to tackle.

                    <ul className='list-disc list-inside mt-4'>
                        
                    </ul> 
                </p>
            </div>
        </div>
    </div>
  )
}

export default About
