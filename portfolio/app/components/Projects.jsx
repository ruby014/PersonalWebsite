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

      {/* container for the projects */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/** project 1*/}
          <div className='flex flex-col bg-white border border-gray-400 rounded-lg overflow-hidden hover:bg-lightHover hover:-translate-y-2 duration-500 hover:shadow-black '>
            {/* cover image of proj */}
            <div className='w-full h-60 relative group'>
              <Image 
                src={assets.project1} 
                alt='' 
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-t-lg hover:brightness-25 duration-400 ease-in-out'
              />
              <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300'>
                <div className='hidden group-hover:flex justify-center mt-24 absolute inset-0'> 
                  <a href='#'>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" 
                      width={80}
                      className='transition duration-300 ease-in-out group-hover:invert'
                      />
                  </a>
                </div>
              </div>
            </div>

            {/* project title, description, tech stack */}
            <div className='flex-1 p-5 font-outfit'>
              <h2 className='text-2xl font-semibold mb-3'>Climate Solutions App</h2>
              <p className='text-gray-600 text-sm mb-5'>An app built for changemakers — share your passion projects, connect with others, and make a lasting impact.</p>
              {/* container to hold the icons */}
              <div className='flex flex-wrap leading-5 gap-3'>
                {/** icon #1 */}
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" 
                    width={30}/>
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        HTML
                        </span>
                    </div>
                </div> 

                {/** icon #2 */}
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" 
                    width={30}/>
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        CSS
                        </span>
                    </div>
                </div> 

                {/* icon 3*/}
                    <div className='relative group'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
                        width={30}/>
    
                        <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                            <span className="whitespace-nowrap bg-gray-100 text-xs rounded-md py-1 px-2 text-black font-medium shadow-md dark:bg-gray-500 dark:text-white">
                            Tailwind
                            </span>
                        </div>
                    </div>

                {/** icon #4 */}
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
                    width={30}/>
    
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        JavaScript
                        </span>
                    </div>
                </div>

                {/** icon #5 */}
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg" 
                    width={30}/>
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        Node.js
                        </span>
                    </div>
                </div>     

                {/** icon #6 */}
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" 
                    width={30}/>
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        PostgreSQL
                        </span>
                    </div>
                </div>  

                {/** icon #7 */}
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" 
                    width={30}/>
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        MongoDB
                        </span>
                    </div>
                </div>   
              </div>
            </div>
          </div> {/** project end */}

        {/** portfolio website project*/}
        <div className='flex flex-col bg-white border border-gray-400 rounded-lg overflow-hidden hover:bg-lightHover hover:-translate-y-2 duration-500 hover:shadow-black '>
            {/* cover image of proj */}
            <div className='w-full h-60 relative'>
              <Image 
                src={assets.project8} 
                alt='' 
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-t-lg'
              />
            </div>

            {/* project title, description, tech stack */}
            <div className='flex-1 p-5 font-outfit'>
              <h2 className='text-2xl font-semibold mb-2'>Portfolio</h2>
              <p className='text-gray-600 text-sm mb-3'>A portfolio of my experiences, accompanied by a cute cat friend.</p>
              {/* container to hold the icons */}
              <div className='flex flex-wrap leading-5 gap-2'>
                {/** icon #1 */}
                <div className='relative group'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" 
                width={30}/>
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        Next.js
                        </span>
                    </div>
                </div>

                {/** icon #2 */}
                <div className='relative group'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
                width={30}/>
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        React
                        </span>
                    </div>
                </div>

                {/** icon #3 */}
                <div className='relative group'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
                width={30}/>
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        Tailwind
                        </span>
                    </div>
                </div>

                {/** icon #4 */}
                <div className='relative group'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
                width={30}/>
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        Javascript
                        </span>
                    </div>
                </div>                
                
            </div>
            </div>
          </div> {/** project end */}

        {/** project 2*/}
        <div className='flex flex-col bg-white border border-gray-400 rounded-lg overflow-hidden hover:bg-lightHover hover:-translate-y-2 duration-500 hover:shadow-black '>
            {/* cover image of proj */}
            <div className='w-full h-60 relative'>
              <Image 
                src={assets.project2} 
                alt='' 
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-t-lg'
              />
            </div>

            {/* project title, description, tech stack */}
            <div className='flex-1 p-5 font-outfit'>
              <h2 className='text-2xl font-semibold mb-2'>Coffee Cloud Cafe</h2>
              <p className='text-gray-600 text-sm mb-3'>My first full-stack CRUD application — a cozy cafe management app built with love and lots of coffee!</p>
              {/* container to hold the icons */}
              <div className='flex flex-wrap leading-5 gap-2'>
                {/** icon #1 */}
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" 
                    width={30}/>
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        HTML
                        </span>
                    </div>
                </div> 

                {/** icon #2 */}
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" 
                    width={30}/>
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        CSS
                        </span>
                    </div>
                </div> 

                {/* icon 3*/}
                    <div className='relative group'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
                        width={30}/>
    
                        <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                            <span className="whitespace-nowrap bg-gray-100 text-xs rounded-md py-1 px-2 text-black font-medium shadow-md dark:bg-gray-500 dark:text-white">
                            React
                            </span>
                        </div>
                    </div>

                {/** icon #4 */}
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg" 
                    width={30}/>
    
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        Vite
                        </span>
                    </div>
                </div>

                {/** icon #5 */}
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg" 
                    width={30}/>
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        Node.js
                        </span>
                    </div>
                </div>     

                {/** icon #6 */}
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" 
                    width={30}/>
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        Express
                        </span>
                    </div>
                </div>  

                {/** icon #7 */}
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" 
                    width={30}/>
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        MongoDB
                        </span>
                    </div>
                </div>   

                {/** icon #7 */}
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" 
                    width={30}/>
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        Postman
                        </span>
                    </div>
                </div>

                {/** icon #7 */}
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg" 
                    width={30}/>
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        Insomnia
                        </span>
                    </div>
                </div>
              </div>
            </div>
          </div> {/** project end */}

        {/** project 3*/}
        <div className='flex flex-col bg-white border border-gray-400 rounded-lg overflow-hidden hover:bg-lightHover hover:-translate-y-2 duration-500 hover:shadow-black '>
            {/* cover image of proj */}
            <div className='w-full h-60 relative'>
              <Image 
                src={assets.project3} 
                alt='' 
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-t-lg'
              />
            </div>

            {/* project title, description, tech stack */}
            <div className='flex-1 p-5 font-outfit'>
              <h2 className='text-2xl font-semibold mb-2'>Chat Time</h2>
              <p className='text-gray-600 text-sm mb-3'>A simple real-time chat application made to learn more about Python. Also my first project in exploring the complexities of network communication.</p>
              {/* container to hold the icons */}
              <div className='flex flex-wrap leading-5 gap-2'>
                {/** icon #1 */}
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" 
                    width={30}/>
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        HTML
                        </span>
                    </div>
                </div> 

                {/** icon #2 */}
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" 
                    width={30}/>
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        CSS
                        </span>
                    </div>
                </div> 

                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" 
                    width={30}/>
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        Python
                        </span>
                    </div>
                </div> 

                {/** icon #2 */}
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" 
                    width={30}/>
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        Flask
                        </span>
                    </div>
                </div> 

                {/* icon 3*/}
                    <div className='relative group'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
                        width={30}/>
    
                        <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                            <span className="whitespace-nowrap bg-gray-100 text-xs rounded-md py-1 px-2 text-black font-medium shadow-md dark:bg-gray-500 dark:text-white">
                            JavaScript
                            </span>
                        </div>
                    </div>
              </div>
            </div>
          </div> {/** project end */}

        {/** project 5*/}
        <div className='flex flex-col bg-white border border-gray-400 rounded-lg overflow-hidden hover:bg-lightHover hover:-translate-y-2 duration-500 hover:shadow-black '>
            {/* cover image of proj */}
            <div className='w-full h-60 relative'>
              <Image 
                src={assets.project5} 
                alt='' 
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-t-lg'
              />
            </div>

            {/* project title, description, tech stack */}
            <div className='flex-1 p-5 font-outfit'>
              <h2 className='text-2xl font-semibold mb-2'>Dictionary Application</h2>
              <p className='text-gray-600 text-sm mb-3'>A high-performance C++ app that loads, organizes, and enables fast searches of words from The Gutenberg Webster's Unabridged Dictionary. Optimized memory usage and performance monitoring of various operations are implemented.</p>
              {/* container to hold the icons */}
              <div className='flex flex-wrap leading-5 gap-2'>
                {/** icon #1 */}
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" 
                    width={30}/>
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        C++
                        </span>
                    </div>
                </div>
            </div>
            </div>
          </div> {/** project end */}

        {/** project 6*/}
        <div className='flex flex-col bg-white border border-gray-400 rounded-lg overflow-hidden hover:bg-lightHover hover:-translate-y-2 duration-500 hover:shadow-black '>
            {/* cover image of proj */}
            <div className='w-full h-60 relative'>
              <Image 
                src={assets.project6} 
                alt='' 
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-t-lg'
              />
            </div>

            {/* project title, description, tech stack */}
            <div className='flex-1 p-5 font-outfit'>
              <h2 className='text-2xl font-semibold mb-2'>Jazz Cafe</h2>
              <p className='text-gray-600 text-sm mb-3'>Explore jazz artists, their songs, and music video links with this interactive web app.</p>
              {/* container to hold the icons */}
              <div className='flex flex-wrap leading-5 gap-2'>
                {/** icon #1 */}
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" 
                    width={30}/>
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        HTML
                        </span>
                    </div>
                </div> 

                {/** icon #2 */}
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" 
                    width={30}/>
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        CSS
                        </span>
                    </div>
                </div> 

                {/** icon #4 */}
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
                    width={30}/>
    
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        JavaScript
                        </span>
                    </div>
                </div>
            </div>
            </div>
          </div> {/** project end */}

        {/** project 7*/}
        <div className='flex flex-col bg-white border border-gray-400 rounded-lg overflow-hidden hover:bg-lightHover hover:-translate-y-2 duration-500 hover:shadow-black '>
            {/* cover image of proj */}
            <div className='w-full h-60 relative'>
              <Image 
                src={assets.project7} 
                alt='' 
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-t-lg'
              />
            </div>

            {/* project title, description, tech stack */}
            <div className='flex-1 p-5 font-outfit'>
              <h2 className='text-2xl font-semibold mb-2'>BiteByte</h2>
              <p className='text-gray-600 text-sm mb-3'>Designed at my first hackathon, ElleHacks, my team and I created an app to enable diabetic seniors to make healthier decisions.</p>
              {/* container to hold the icons */}
              <div className='flex flex-wrap leading-5 gap-2'>
                {/** icon #1 */}
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" 
                    width={30}/>
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        Figma
                        </span>
                    </div>
                </div>
            </div>
            </div>
          </div> {/** project end */}

      </div>
    </div>
  )
}

export default Projects
