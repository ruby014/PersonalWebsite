import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
// import Progress from './progress'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <div>
            <br></br>
            <br></br>
            <Image 
            src={assets.profile_img} 
            alt='' 
            className='rounded-full w-32'/>
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        <br></br><br></br>
            <TypeAnimation 
            sequence={[
                "Hi, I'm Ruchelle!", 
                3000,
                "Welcome to my page ☺", 
                3000,
            ]}
            wrapper="span"
            speed={30}
            repeat={Infinity}
            />
        </h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
            computer programming student based in Toronto.
        </h1>
        <p className='max-w-2xl text-base mx-auto font-Ovo'>
            Carrying a unique blend of experience from healthcare to tech — I enjoy building impactful and user-focused software.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href='https://www.linkedin.com/in/ruby014/' className='group px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 font-outfit text-base hover:bg-[#FFFFFF] hover:text-black hover:border-gray-500'>
                contact me
                <span className='relative w-5 h-5'>
                <Image src={assets.whitemail}
                alt='' 
                width={20}
                height={20}
                className='absolute inset-0 opacity-100 group-hover:opacity-0'/>
                <Image 
                src='https://www.svgrepo.com/show/521128/email-1.svg'
                alt=''
                width={20}
                height={20}
                className='absolute inset-0 opacity-0 group-hover:opacity-100'
                />
                </span>
            </a>
            {/* <Progress /> */}
            <a className='cursor-pointer px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 font-outfit text-base hover:bg-lightHover'
            href='/ruchelle_baybayan_resume.pdf'
            download>
                my resume
                <Image src={assets.download_icon} alt='' className='w-4'/>
            </a>
        </div>
    </div>
  )
}

export default Header