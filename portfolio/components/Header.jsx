import { assets } from '@/assets/assets'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div>
        <Image src={assets.profile_img} alt='' className='w-rounded-full w-32' />
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
            Hi! I am Derrick Edusei <Image src ={assets.hand_icon} alt='' className='w-6'/></h3>
            <h1 className='text-3xl md:text-6xl lg:text-[66px] font-Ovo'>
                WEB DEVELOPER BASED IN ZURICH
            </h1>
            <p className='text-base md:text-lg lg:text-xl font-Ovo mt-5 mb-10'>
                I am a passionate web developer with a focus on creating beautiful and functional websites.
                I specialize in front-end development, but I also have experience with back-end technologies.
                </p>
                <div>
                    <a href="#contact">contact me <image src ={assets.right_arrow_white} alt="" className=' w-4'/></a>

                    <a href="/sample-resume.pdf"
                    download className='' >my resume <image src ={assets.download_icon} alt="" className=' w-4'/></a>
                </div>
      </div>
    </div>
  )
}

export default Header
