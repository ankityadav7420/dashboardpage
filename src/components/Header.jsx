import React from 'react'
import { IoIosAdd,IoIosAddCircle, IoIosCreate } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import userAv from '../assets/imagesProfile.jpeg';
import {HiOutlineMail} from 'react-icons/hi';
function Header() {
  return (

    <div className="flex items-center justify-between border-b">
       <input
          type="text"
          className="py-2 px-4 border rounded-lg focus:outline-none w-full"
          placeholder="Search..."
        />
        <div className="flex items-center ml-3 text-gray-600 cursor-pointer p-4">
          <IoIosNotifications className="text-3xl" />
          <HiOutlineMail className="text-3xl" />
        </div>
        <div className="flex items-center">
          <img
            src={userAv}
            alt="User Icon"
            className="w-11 h-11 rounded-full cursor-pointer text-xl"
          />
        </div>
    </div>

  )
}

export default Header