import { assets } from "@/assets/assets"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"

const Work = () => {
    return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h2 className='text-center text-5xl font-ovo'>Work Experience</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-10 font-ovo'>
            A quick look at where I’ve been building and breaking things (with intention, of course).
            </p>

        <div
        className='grid grid-cols-1 gap-10'>
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
                    <h3 className="font-outfit text-xl mt-1 font-medium hover:text-gray-600">PAR Technology</h3>
                </a>
            </div>
                <ul className="list-disc list-inside space-y-2 text-left text-sm sm:text-base font-outfit">
                    <li>Automating POS test cases using Selenium (C#) and TestComplete (JavaScript) as part of a QA team in an Agile environment.</li>
                    <li>Running smoke and regression tests to help identify bugs early and support product stability.</li>
                    <li>Writing and updating test scripts, with integration into Jenkins pipelines and AWS EC2 environments.</li>
                    <li>Documenting and tracking issues in Jira to support developers and reduce disruptions to active test cases.</li>
                    <li>Collaborating with QA and QE teams to refine test strategies, align on quality goals, and implement improvements in automation workflows.</li>
                    <li>Investigating and analyze automated test run results to identify root causes of failures and ensure product quality across builds.</li>
                    <li>Learning best practices in test automation and gradually contributing to team goals around quality and efficiency.</li>
                </ul>
            
                <div className='flex flex-wrap leading-5 gap-3 mt-5 font-outfit'>
                {/** icon #1 */}
                <div className='relative group'>
                    <Image 
                    src={assets.testrail} 
                    alt=""
                    width={30}/>
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        TestRail
                        </span>
                    </div>
                </div> 

                {/** icon #2 */}
                <div className='relative group'>
                    <Image 
                    src={assets.testexecute}
                    alt='' 
                    width={30}/>
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        TestExecute
                        </span>
                    </div>
                </div> 

                {/* icon 3*/}
                    <div className='relative group'>
                        <Image 
                        src={assets.testcomplete}
                        width={30}
                        alt=""/>
    
                        <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                            <span className="whitespace-nowrap bg-gray-100 text-xs rounded-md py-1 px-2 text-black font-medium shadow-md dark:bg-gray-500 dark:text-white">
                            TestComplete
                            </span>
                        </div>
                    </div>

                {/** icon #4 */}
                <div className='relative group'>
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
                    alt=""
                    width={30}
                    height={30}/>
    
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        JavaScript
                        </span>
                    </div>
                </div>

                {/** icon #5 */}
                <div className='relative group'>
                    <Image 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" 
                    width={30}
                    height={30}
                    alt=""
                    />
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        Selenium
                        </span>
                    </div>
                </div>     

                {/** icon #6 */}
                <div className='relative group'>
                    <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" 
                    alt=""
                    width={30}/>
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        C#
                        </span>
                    </div>
                </div>   

                {/** icon #7 */}
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" 
                    width={30}/>
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        Jenkins
                        </span>
                    </div>
                </div>   

                {/** icon #8 */}
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                    width={30}/>
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        AWS EC2
                        </span>
                    </div>
                </div>  

                {/** icon #9 */}
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg"
                    width={30}/>
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        Jira
                        </span>
                    </div>
                </div> 

                {/** icon #10 */}
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                    width={30}/>
          
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                        <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                        GitHub
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