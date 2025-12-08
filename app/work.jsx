import { assets } from "@/assets/assets"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"

const Work = () => {
    return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h2 className='text-center text-5xl font-ovo'>Work Experience</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-10 font-ovo'>
                A quick look at where I’ve been building and breaking things (sometimes)😉.
            </p>

            <div className="grid grid-cols-1 gap-10 mb-10">
                <div className='flex flex-col bg-white border border-gray-400 rounded-lg overflow-hidden hover:bg-lightHover hover:-translate-y-2 duration-500 hover:shadow-black p-10'>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-2">
                    <h4 className="text-3xl font-outfit font-medium mb-2">Software Developer Intern
                        <span className="mt-2 block lg:hidden text-base italic font-outfit">September 2025 - Present</span>
                    </h4>
                    <h3 className="hidden lg:inline italic font-outfit text-base lg:ml-auto">
                        September 2025 - Present
                    </h3>
                </div>
                <div className="flex space-x-3 mb-5">
                    <a href="https://www.linkedin.com/company/dayforce/">
                        <Image 
                        src={assets.dayforcelogo}
                        alt=""
                        className="w-10"
                        />
                    </a>
                    <a href="https://www.dayforce.com/">
                        <h3 className="font-outfit text-xl mt-1 font-medium hover:text-gray-600">Dayforce</h3>
                    </a>
                </div>
                <ul className="list-disc list-inside space-y-2 text-left text-sm sm:text-base font-outfit">
                    <li>Implemented bulk deactivation, allowing admins to disable 14,000+ skills in a single action and drastically reducing manual work.</li>
                    <li>Enhanced a modal with ML-powered proficiency and recommendation insights, helping new users understand and select recommended skills.</li>
                    <li>Developing a conditional skill-tagging feature using ML insights, highlighting skills that match or complement users’ profiles.</li>
                    <li>Boosted automated test coverage to 80%+ across two frontend projects with Jest, improving reliability and confidence in releases.</li>
                    <li>Resolved Sev-2 and Sev-3 tickets in both frontend and backend projects, identifying root causes and delivering timely fixes.</li>
                    <li>Collaborate in Agile/Scrum teams with developers, QA, and product managers to deliver features on schedule.</li>
                </ul>

                <div className='flex flex-wrap leading-5 gap-3 mt-5 font-outfit'>
                    {/** icon #1 */}
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

                    {/** icon #2 */}
                    <div className='relative group'>
                        <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" 
                        alt=""
                        width={30}/>
                        <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                            <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                                .NET
                            </span>
                        </div>
                    </div>

                    {/** icon #3 */}
                    <div className='relative group'>
                        <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
                        alt=""
                        width={30}/>
                        <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                            <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                                React
                            </span>
                        </div>
                    </div>

                    {/** icon #4 */}
                    <div className='relative group'>
                        <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg" 
                        alt=""
                        width={30}/>
                        <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                            <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                                SQL 
                            </span>
                        </div>
                    </div>

                    {/** icon #5 */}
                    <div className='relative group'>
                        <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"  
                        alt=""
                        width={30}/>
                        <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                            <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                                MongoDB
                            </span>
                        </div>
                    </div>

                    {/** icon #6 */}
                    <div className='relative group'>
                        <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" 
                        alt=""
                        width={30}/>
                        <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                            <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                                Jest
                            </span>
                        </div>
                    </div>

                    {/** icon #7 */}
                    <div className='relative group'>
                        <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg" 
                        alt=""
                        width={30}/>
                        <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                            <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                                Cypress
                            </span>
                        </div>
                    </div>

                    {/** icon #8 */}
                    <div className='relative group'>
                        <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" 
                        alt=""
                        width={30}/>
                        <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-centerz-10">
                            <span className="whitespace-nowrap bg-gray-200 text-xs rounded-md py-1 px-2 text-black font-bold shadow-md dark:bg-gray-500 dark:text-white">
                                Playwright
                            </span>
                        </div>
                    </div>       
                </div>
                </div>
            </div>

            <div className='grid grid-cols-1 gap-10'>
                <div className='flex flex-col bg-white border border-gray-400 rounded-lg overflow-hidden hover:bg-lightHover hover:-translate-y-2 duration-500 hover:shadow-black p-10'>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-2">
                    <h4 className="text-3xl font-outfit font-medium mb-2">QA Automation Engineer Co-op
                        <span className="mt-2 block lg:hidden text-base italic font-outfit">May 2025 - Aug 2025</span>
                    </h4>
                    <h3 className="hidden lg:inline italic font-outfit text-base lg:ml-auto">
                        May 2025 - Aug 2025
                    </h3>
                </div>
                <div className="flex space-x-3 mb-5">
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
                        <li>Automated distributed and web POS test cases using Selenium (C#) and TestComplete (JavaScript), integrated with Jenkins pipelines running on AWS EC2.</li>
                        <li>Optimized Jenkins workflows by contributing to updates on 700+ pipeline scripts, reducing pull code time by 2 minutes per job and saving ~1 hour across full runs.</li>
                        <li>Refactored automation scripts to adapt to evolving UI changes, cutting false failures by ~60–70% and improving suite reliability to 98%+ pass rates.</li>
                        <li>Investigated failed/untested cases across smoke, regression, and patch runs, identifying root causes and supporting faster resolutions.</li>
                        <li>Logged and tracked issues in Jira, collaborating with developers to implement timely fixes and minimize disruptions to active testing.</li>
                        <li>Partnered with QA/QE teams to refine test strategies and improve automation workflows, strengthening overall product quality.</li>
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
            </div>
        </div>
    )
}

export default Work 