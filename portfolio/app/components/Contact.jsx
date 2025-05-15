import { assets } from "@/assets/assets"
import Image from "next/image"

const Contact = () => {
    return (
        <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h2 className='text-center text-5xl font-ovo'>Contact Me</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-5 font-ovo'>
            Whether you’re here to collaborate, chat, or just say hi — you’re always welcome!
            </p>

            <div className='flex justify-center flex-wrap gap-10 mb-7'>
                {/** icon #1 */}
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" 
                    width={30}/>
                </div> 
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" 
                    width={30}/>
                </div> 
                <div className='relative group'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" 
                    width={30}/>
                </div> 
            </div>

            <h2 className='text-center text-5xl font-ovo'>Thanks for stopping by!</h2>
            <br></br>
            <div className="flex justify-center items-center">
                <Image
                src={assets.byecat}
                alt="hoppy cat"
                />
            </div>
        </div>
    )
}

export default Contact