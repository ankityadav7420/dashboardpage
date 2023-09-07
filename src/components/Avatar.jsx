import { useState } from "react";
import { IoMdPeople, IoIosAddCircle } from "react-icons/io";
import { BsToggleOn,BsToggleOff } from "react-icons/bs";
import {HiOutlineInformationCircle} from 'react-icons/hi'
import DonutChart from './DonutChart'
const Avatar = () => {
const [visibleToEmployee, setVisibleToEmployee] = useState(false);
const handleToggleClick = () => {
setVisibleToEmployee((prevValue) => !prevValue);
};
return (
<div className="lg:w-1/3 bg-gray-100" >
<div className="rounded-lg p-4 mt-11 ">
  
   <div className="text-center text-blue-900 text-xl pr-11">
      Ankit Kumar Yadav
   </div>
   <div className="text-center text-gray-400 text-sm pr-11">
     Software Developer
   </div>
   <div className="flex justify-center items-center space-x-2 text-sm pr-11">
      <IoMdPeople className="w-4 h-4" />
      <span>21 followers</span>
      <span>43 following</span>
   </div>
   <div className="mt-2 w-full">
      <div className="flex items-center mt-4">
         <div className="text-sm truncate w-48 text-blue-900" title="Make My profile visible to Employee">
            Make My profile visible to all
         </div>
         <a onClick={handleToggleClick}>
            {visibleToEmployee ? (
            <BsToggleOn className="w-7 h-11 cursor-pointer text-indigo-500" />
            ) : (
            <BsToggleOff className="w-7 h-11 cursor-pointer text-gray-400" />
            )}
         </a>
      </div>
      <div className="text-gray-400 text-xs">
         Your profile and career goals will appear when employees search our database for candidates.
      </div>
   </div>
   <div className="flex flex-col space-y-2 text-sm pt-2 m-2">
      <div className="flex items-center">
         <span className="mr-1 text-blue-900">Online Links</span>
         <IoIosAddCircle className="w-5 h-5 mr-0 ml-auto cursor-pointer text-indigo-500" />
      </div>
      <span className="text-gray-400">
         All your online links will increase your portfolio strength
      </span>
   </div>
   <div className="flex justify-center items-center  space-x-11  text-gray-500 text-sm mb-2 shadow-md p-4 rounded-lg">
      <svg className="w-9 h-9 cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="rgb(10, 218, 106)">
         <path d="M415.44 512h-95.11L212.12 357.46v91.1L125.69 512H28V29.82L68.47 0h108.05l123.74 176.13V63.45L386.69 0h97.69v461.5zM38.77 35.27V496l72-52.88V194l215.5 307.64h84.79l52.35-38.17h-78.27L69 13zm82.54 466.61l80-58.78v-101l-79.76-114.4v220.94L49 501.89h72.34zM80.63 10.77l310.6 442.57h82.37V10.77h-79.75v317.56L170.91 10.77zM311 191.65l72 102.81V15.93l-72 53v122.72z"/>
      </svg>
      <svg className="w-9 h-9 cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 528 512" fill="rgb(34, 99, 205)">
         <path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z"/>
      </svg>
   
      <svg className="w-9 h-9 cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
         <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
               <stop offset="0%"  style={{ stopColor: 'greenyellow', stopOpacity: 1 }} />
               <stop offset="100%" style={{ stopColor: 'red', stopOpacity: 1 }} />
            </linearGradient>
         </defs>
         <path d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z" fill="url(#grad)" />
         </svg>
      </div>
   </div>
   <div className=" w-full gray-200   p-2 text-center border-2 rounded-2xl" >
      <div className="text-center text-xl mb-2" >
         <span className="text-center  flex" >
            Wheels of Opportunities <HiOutlineInformationCircle />
         </span>
      </div>
      <DonutChart />
   </div>

   <div className="bg-white rounded-lg mt-4 pb-4">
      <div >Your Ranking</div>
      <div>
         <div className="bg-blue-200 h-4 rounded-full relative overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-4 rounded-full w-3/4 transition-all">
         </div>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="absolute right-0 h-4 w-4 mt-0.5 mr-1"
            >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15l-1 3M12 9v.01M12 3v.01" />
         </svg>
      </div>
      <span className="text-blue-800 p-4">Hurry!! You are on top 27%</span>
   </div>
</div>
</div>
);
};
export default Avatar;