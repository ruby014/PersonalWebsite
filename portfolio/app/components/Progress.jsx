'use client'
import { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/public/assets/assets'

const Progress = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }

  return (
    <>
      <div
        onClick={handleClick}
      >
            <a className='cursor-pointer px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 font-outfit text-base hover:bg-lightHover'>
                my resume
                <Image src={assets.download_icon} alt='' className='w-4'/>
            </a>
      </div>

      {showModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full text-center shadow-xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded hover:cursor-pointer w-10"
            >
              ✕
            </button>
            <br></br>
            <h2 className="text-xl font-bold mb-2 font-outfit">Sorry about that.</h2>
            <p className="text-gray-700">I'm working hard on updating my resume. Check back again later!</p>
            <Image
            src={assets.exercisecat}
            alt=''
            unoptimized
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Progress
