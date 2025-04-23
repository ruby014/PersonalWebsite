import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div id='tools' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-ovo'>Things I've used or like using</h4>
        <h2 className='text-center text-5xl font-ovo'>My toolbox</h2>

        {/* for displaying the grids */}
        <div className='flex w-full flex-col lg:flex-row items-center justify-center gap-20 my-20'>
            <div className='grid grid-cols-4 gap-4 font-medium'>
                <div className='border-[0.5px] border-gray-500 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-2 duration-500 hover:shadow-black font-outfit'>
                    Languages
                    <p>
                        <Image src={assets.web_icon} alt='' className='w-4'/>
                    </p>
                </div>
                <div className='border-[0.5px] border-gray-500 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-2 duration-500 hover:shadow-black font-outfit'>Database</div>
                <div className='border-[0.5px] border-gray-500 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-2 duration-500 hover:shadow-black font-outfit'>DevOps & System</div>
                <div className='border-[0.5px] border-gray-500 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-2 duration-500 hover:shadow-black font-outfit'>IDEs</div>
            </div>
        </div>
    </div>
  )
}

export default Skills