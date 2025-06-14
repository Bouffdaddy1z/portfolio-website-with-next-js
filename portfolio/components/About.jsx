import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        Introduction</h4>
      <h2 className='text-center text 5x` font-Ovo'>
        About Me</h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3x1 max-w-none' >
                <Image src={assets.aura} alt='user' className='w-full rounded-3xl' />
            </div>
            <div className='flex-1 '>
                <p>I am an experienced frontend developer with over a decade 
                    of professional experience in the field. I have a strong
                    background in web development, specializing in creating
                    user-friendly and visually appealing websites. My skills
                    include HTML, CSS, JavaScript, and various frontend frameworks.       
                    I am passionate about staying up-to-date with the latest
                    industry trends and technologies, and I am always looking for
                    new challenges to tackle.</p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2x1'>
                        {infoList.map(({icon, iconDark, title, description}, index) => (
                            <li className='border-[0.5px] border-gray-400 rounded-x1 
                            p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'
                           
                             key ={index} >
                                <Image src={icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </li>
                        ))}
                    </ul> 
                    <h4 className='my-6 text-gray-700 font-Ovo'>Tools I use</h4>
                    <ul className='flex items-center gap-3 sm:gap-5'> 
                        {toolsData.map ((tool, index) => (
                          <li className='flex items-center justify-center w-10 h-10 w-12 sm:w-14 aspect-square 
                          border border-gray-400 rounded-lg cursor-pointer  hover:-translate-y-1 duration-500'
                           key={index}>
                            <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                          </li>
                        ))}
 
                 </ul>
              
            </div>
        </div>
    </div>
  )
}

export default About
