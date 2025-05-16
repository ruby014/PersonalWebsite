import { assets } from "@/assets/assets"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"

const Work = () => {
    return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h2 className='text-center text-5xl font-ovo'>Work Experience</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-5 font-ovo'>
            A quick look at where I’ve been building and breaking things (with intention, of course).
            </p>

        <div className='grid grid-cols-1 gap-10'>
            <div className='flex flex-col bg-white border border-gray-400 rounded-lg overflow-hidden hover:bg-lightHover hover:-translate-y-2 duration-500 hover:shadow-black p-10'>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-2">
                <h4 className="text-3xl font-outfit font-medium mb-2">QA Automation Engineer Co-op
                    <span className="mt-2 block lg:hidden text-base italic font-outfit">May 2025 - Present</span>
                </h4>
                <h3 className="hidden lg:inline italic font-outfit text-base lg:ml-auto">
                    May 2025 - Present
                </h3>
            </div>
            <div className="flex space-x-3">
                <a href="https://www.linkedin.com/company/partechnology">
                    <Image 
                    src={assets.parlogo}
                    alt=""
                    className="w-10"
                    />
                </a>
                <a href="https://partech.com/">
                    <h3 className="font-outfit text-xl mt-1 hover:text-gray-600">PAR Technology</h3>
                </a>
            </div>
                <ul className="list-disc list-inside space-y-2 text-left text-sm sm:text-base font-outfit">
                    <li>Assisting in automating web and POS test cases using Selenium (C#) and TestComplete (JavaScript) as part of a QA team in an Agile Scrum environment.</li>
                    <li>Running smoke and regression tests to help identify bugs early and support product stability.</li>
                    <li>Writing and updating test scripts, with integration into Jenkins pipelines and AWS EC2 environments.</li>
                    <li>Documenting and tracking issues in Jira to support developers and reduce disruptions to active test cases.</li>
                    <li>Collaborating with QA and QE team members to troubleshoot test failures and enhance test coverage.</li>
                    <li>Learning best practices in test automation and gradually contributing to team goals around quality and efficiency.</li>
                </ul>
            
                <div className='flex flex-wrap leading-5 gap-3 mt-4 font-outfit'>
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
            <TypeAnimation 
            sequence={[
                "My experience is currently under construction 🚧 ......", 
                3000,
                "This is my first internship in tech 🤖", 
                3000,
            ]}
            wrapper="span"
            speed={30}
            repeat={Infinity}
            />
        </div>
        </div>
    )
}

export default Work 