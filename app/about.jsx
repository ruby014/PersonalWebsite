import { assets, infoList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import CustomCursor from './customcursor'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <CustomCursor/>
        <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
        <h2 className='text-center text-5xl font-ovo'>About me</h2>
        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image 
                src={assets.dogandgirl} 
                alt='user' 
                className='w-full rounded-3xl'/>
            </div>
            <div className='flex-1'>
                <p className='mb-10 font-ovo'>
                    I’m an aspiring software developer with a curious mind and a 
                    background in healthcare that brings a unique perspective to 
                    problem-solving. Working in healthcare sharpened my focus on practical, effective solutions that address real needs. I find enjoyment in the process of diving into an idea, figuring out the nuances of how to bring it to life, and turning it into something 
                    <span className='font-semibold'> practical </span>and
                    <span className='font-semibold'> meaningful. </span>
                </p>
                <ul className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-max-2xl'>
                    {infoList.map(({icon, title, description}, index) => (
                        <li 
                        key={index} 
                        className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-2 duration-500 hover:shadow-black font-outfit'>
                            <Image 
                            src={icon} 
                            alt={title} 
                            className='w-7 mt-3'/>
                            <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                            {description.map((line, i) => (
                                <p key={i} className='text-gray-600 text-sm'>
                                    {line}
                                </p>
                            ))}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default About