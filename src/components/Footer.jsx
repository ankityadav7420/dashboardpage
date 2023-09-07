import React from 'react'

function Footer() {
  return (
        <div className="absolute mt-11 left-0  w-full p-6 pt-10 ">
            <div className="flex justify-between text-gray-500 text-sm mb-2 cursor-pointer text-center">
                <span>About</span>
                <span>Accessibility</span>
                <span>Help</span>
            </div>
            <div className="flex justify-between text-gray-500 text-sm cursor-pointer">
                <span>Privacy & Terms</span>
                <span>Advertise</span>
                <span className="hidden md:block">More</span>
            </div>
            <p className="text-indigo-500 text-sm pt-2 text-center">&copy;
             <span className='text-lg '>spehre.io</span> @2023
            </p>
    </div>
  )
}

export default Footer