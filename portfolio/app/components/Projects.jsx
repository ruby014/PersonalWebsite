import { assets, projectData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-ovo'>My portfolio</h4>
        <h2 className='text-center text-5xl font-ovo'>Projects</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        Explore some of the things I've built recently. 
        </p>

        {/** container for the projects */}
        <div className='grid grid-cols-auto my-10 gap-5 '>
            {/** project #1 */}
            {projectData.map((project, index) => (
                <div key={index} 
                className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative 
                cursor-pointer group grayscale-75 hover:grayscale-0 transition duration-500'
                style={{backgroundImage: `url(${project.bgImage})`}}>
                    <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5
                     flex items-center justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-outfit'>{project.title}</h2>   
                            <p className='font-outfit text-sm'>{project.description}</p>
                        </div>
                        <div>
                            <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Projects