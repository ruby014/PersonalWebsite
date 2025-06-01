'use client'
import { useState } from 'react'
import confetti from 'canvas-confetti'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const EasterEgg = () => {
  const [showModal, setShowModal] = useState(false)
  const [isHover, setIsHover] = useState(false)

  const handleClick = () => {
    setShowModal(true)
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 }
    })
  }

  return (
    <>
      <div
        onClick={handleClick}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="fixed bottom-4 right-4 cursor-pointer z-50"
      >
        <Image
          src={isHover ? assets.catquestion : assets.peepcat}
          alt=""
          width={55}
          height={55}
        />
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
            <h2 className="text-xl font-bold mb-2 font-outfit">Surprise!</h2>
            <p className="text-gray-700">As it turns out, curiousity doesn't kill the cat. So keep being curious!</p>
            <Image
            src={assets.partycat}
            alt=''
            unoptimized
            />
          </div>
        </div>
      )}
    </>
  )
}

export default EasterEgg
