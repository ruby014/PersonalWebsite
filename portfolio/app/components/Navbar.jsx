import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef(); 

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false); 
      }
    })
  }, [])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
    </div>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : "" }`}>
            <a href='' className='w-28 text-2xl font-medium font-outfit'>Ruchelle.</a>

            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50" }`}>
                <li><a className='font-Ovo' href='#top'>Home</a></li>
                <li><a className='font-Ovo' href='#about'>About</a></li>
                <li><a className='font-Ovo' href='#tools'>Tools</a></li>
                <li><a className='font-Ovo' href='#work'>Work</a></li>
                <li><a className='font-Ovo' href='#projects'>Projects</a></li>
            </ul>

            <div className='flex items-center gap-6'>
              

                {/** icon #1 */}
                <div className='relative group'>
                  <a href='https://www.linkedin.com/in/ruby014/'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" 
                      width={30}/>
                  </a>
                </div> 
                <div className='relative group'>
                  <a href='https://github.com/ruby014'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" 
                      width={30}/>
                  </a>
                </div> 
                <div className='relative group'>
                  <a href='mailto:ruchelle.bay@gmail.com'>
                    <img src="https://www.gstatic.com/marketing-cms/assets/images/66/ac/14b165e647fd85c824bfbe5d6bc5/gmail.webp=s96-fcrop64=1,00000000ffffffff-rw" 
                      width={30}/>
                  </a>
                </div> 

                <button className='block md:hidden ml-3' onClick={openMenu}>
                  <Image src={assets.menu_black} alt='' className='w-6'/>
                </button>
            </div>

            {/* for responsive mobile menu*/}

            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 
            top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                <div className='absolute right-5 top-6' onClick={closeMenu}>
                  <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'/>
                </div>

                <li><a className='font-Ovo' onClick={closeMenu} href='#top'>Home</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href='#about'>About</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href='#tools'>Tools</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href='#work'>Work</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href='#projects'>Projects</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar