import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Tools = () => {
  return (
    <div id='tools' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-ovo'>Tools I use</h4>
        <h2 className='text-center text-5xl font-ovo'>My toolbox</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
            A collection of tools I’ve picked up, tinkered with, and come to rely on while building cool stuff.
        </p>

        <div className='grid grid-cols-auto gap-6 my-10'>

            {/* languages container */}
            <div className='font-outfit cursor-pointer border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black hover:bg-lightHover hover:-translate-y-2 duration-500'>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#434343"><path d="m320-241.33-240-240 241.33-241.34L369-675 175-481l192.33 192.33L320-241.33ZM638.67-240 591-287.67l194-194L592.67-674 640-721.33l240 240L638.67-240Z"/></svg>
                </span>
                <h3 className='text-lg my-4 text-gray-700 font-medium'>Languages & Frameworks</h3>
                {/* container to hold the icons */}
                <div className='flex flex-wrap leading-5 gap-1'>
                <ul className='text-md text-gray-600 leading-6'>
                    <li>HTML, CSS</li>
                    <li>C, C++, C#</li>
                    <li>JavaScript</li>
                    <li>Express</li>
                    <li>React</li>
                    <li>Python</li>
                    <li>Flask</li>
                </ul>               
                </div>
            </div>

            {/* database icon container */}
            <div className='font-outfit cursor-pointer border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black hover:bg-lightHover hover:-translate-y-2 duration-500'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#434343"><path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-485q87 0 177.33-26.17 90.34-26.16 111.34-57.83-21.67-31-111.84-57.67-90.16-26.66-176.83-26.66-89 0-177.5 25.83T190.67-689q23.33 33.33 111.16 58.67Q389.67-605 480-605Zm-.67 209q42 0 83-4.33 41-4.34 78.5-12.84T712.17-434q33.83-12.33 61.16-27.67V-605q-28 15.33-61.83 27.67-33.83 12.33-71.67 20.83-37.83 8.5-78.16 13.17-40.34 4.66-82.34 4.66T396-543.33q-41.33-4.67-78.83-13.17t-70.84-20.83Q213-589.67 186.67-605v143.33Q213-446.33 246-434q33 12.33 70.5 20.83 37.5 8.5 78.83 12.84 41.34 4.33 84 4.33Zm.67 209.33q47.33 0 97.17-8 49.83-8 91.5-21.16Q710.33-229 739-245.17q28.67-16.16 34.33-33.16v-116Q746-379 712.17-367q-33.84 12-71.34 20.5t-78.16 12.83q-40.67 4.34-83.34 4.34-42.66 0-84-4.34Q354-338 316.5-346.5T246-367q-33-12-59.33-27.33v117q5 16.33 33.16 32.66Q248-228.33 290-215.5q42 12.83 92 20.83 50 8 98 8Z"/></svg>
                </span>
                <h3 className='text-lg my-4 text-gray-700 font-medium'>Database</h3>
                <ul className='text-md text-gray-600 leading-6'>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>Oracle</li>
                </ul>
            </div>

            <div className='font-outfit cursor-pointer border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black hover:bg-lightHover hover:-translate-y-2 duration-500'>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#434343"><path d="M80-160v-640h800v640H80Zm66.67-66.67h666.66v-424H146.67v424ZM300-288l-46.67-46.67 103-104-104-104L300-589.33l150.67 150.66L300-288Zm186.67 2.67V-352h226.66v66.67H486.67Z"/></svg>
                </span>
                <h3 className='text-lg my-4 text-gray-700 font-medium'>DevOps & OS</h3>
                <ul className='text-md text-gray-600 leading-6'>
                    <li>Linux</li>
                    <li>Jenkins</li>
                    <li>Docker</li>
                    <li>Bash</li>
                    <li>PowerShell</li>
                </ul>
            </div>

            <div className='font-outfit cursor-pointer border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black hover:bg-lightHover hover:-translate-y-2 duration-500'>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#434343"><path d="M764-120 523.67-360.33l66-66L830-186l-66 66Zm-571.33 0-66-66L412-471.33l-94-94-24.67 24.66L247-587v84l-25.33 25.33L100-599.33l25.33-25.34H210l-48.67-48.66L296-808q18-18 39-25t45-7q24 0 45 8.67 21 8.66 39 26.66l-102 102L410.67-654l-25.34 25.33 92 92L588.67-648q-6.67-12.33-10.5-27.67-3.84-15.33-3.84-32 0-55 39.17-94.16Q652.67-841 707.67-841q15 0 26.5 3t20.83 8.33L665.33-740l74 74L829-755.67q5.67 10 8.83 22.17 3.17 12.17 3.17 27.17 0 55-39.17 94.16Q762.67-573 707.67-573q-16 0-28.67-2.33-12.67-2.34-23.67-7.34L192.67-120Z"/></svg>
                </span>
                <h3 className='text-lg my-4 text-gray-700 font-medium'>Other Tools</h3>
                <ul className='text-md text-gray-600 leading-6'>
                    <li>Postman</li>
                    <li>Insomnia</li>
                    <li>Jira</li>
                    <li>Figma</li>
                    <li>Selenium</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Tools