import { assets } from '@/assets/assets'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <Image src={assets.bbb} alt='Profile' className='rounded-full w-32' />

      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi! I am Derrick Edusei 
        <Image src={assets.hand_icon} alt='Wave' className='w-6' />
      </h3>

      <h1 className='text-3xl md:text-6xl lg:text-[66px] font-Ovo'>
        WEB DEV BASED IN ACCRA
      </h1>

      <p className='max-w-2xl mx-auto font-Ovo'>
        I am a passionate web developer with a focus on creating beautiful and functional websites.
        I specialize in front-end development, but I also have experience with back-end technologies.
      </p>  

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact" className='px-10 py-3 border-white rounded-full bg-black text-white flex items-center gap-2'> 
          contact me 
          <Image src={assets.right_arrow_white} alt="Arrow" className='w-4' />
        </a>

        <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
          my resume 
          <Image src={assets.download_icon} alt="Download" className='w-4' />
        </a>
      </div>
    </div>
  )
}

export default Header
