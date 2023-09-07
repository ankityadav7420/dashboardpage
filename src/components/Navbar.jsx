import React from 'react'
import { useState } from "react";
import {Menus} from '../data/data'
import Footer from './Footer';
import Details from './Details'
import Avtar1 from '../assets/avtar1.jpeg'
import Avatar2 from '../assets/avtar2.jpeg'
const CommunityFeedItem = ({ avatarSrc, title, members }) => (
    <div className="flex gap-x-2 items-center mt-4">
       <img src={avatarSrc} className="w-8 h-8 rounded-full" />
       <div>
          <p className="text-blue-700 text-sm font-medium">{title}</p>
          <p className="text-gray-500 text-xs">{members} members</p>
       </div>
    </div>
    );
function Navbar() {
    const [open, setOpen] = useState(true);
    const [selectedMenu, setSelectedMenu] = useState(0);
  return (
    <div className="flex">
        <div >
        <div
            className={`${
                open ? "w-72" : "w-20"
                } bg-slate-50 h-screen p-5 pt-8 relative duration-300 transition-all md:w-60 lg:w-72`}
            >
            <div className="flex items-center">
            <img
                src="./src/assets/logo.png"
                className={`h-8 w-8 ml-5 cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
            />
            <h1
                className={`text-gray-900 origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
                }`}
            >
                spehre
            </h1>
            </div>

            <div style={{ width: '80%', margin: '0 auto' }}>
                <hr className="border-gray-300 my-2" style={{ borderTop: '5px solid rgb(242, 241, 246)', marginLeft: '-40px', width: '143%' }} />
            </div>

            <ul className="pt-1 " >
                {Menus.map((Menu, index) => (
                    <li
                        key={index}
                            className={`flex rounded-md p-2 cursor-pointer text-blue-700 text-sm items-center gap-x-2 mt-4 ${
                            selectedMenu === Menu.sno ? "bg-gray-200 border-1 shadow-sm" : "bg-white hover:bg-gray-300"
                            }`}
                            onClick={() => setSelectedMenu(Menu.sno)}
                        >
                        <img src={`./src/assets/${Menu.src}.png`}  className={`${
                            !open && "hidden"
                            } origin-left duration-200 ${
                            selectedMenu === Menu.sno ? "font-semibold text-black" : "rgb(184, 178, 254)"
                            }`}
                        />
                        <span
                            className={`${
                                !open && "hidden"
                                } origin-left duration-200 ${
                                selectedMenu === Menu.sno ? "font-semibold text-black" : "text-gray-500"
                            }`}
                            style={{ color: selectedMenu === Menu.sno ? "black" : "" }}
                        >
                        {Menu.title}
                        </span>
                    </li>
                ))}
        </ul>

        <hr className="my-1"  />
        <div className="h-full w-1 absolute top-0 right-0 bg-gray-300"  />
            <div className="pt-8">
                <h2 className={`text-black-700 font-medium text-sm duration-200 ${!open && "scale-0"}`}>
                Communities Feed
                </h2>
                <div className={`${!open && "hidden"} origin-left duration-200 text-gray-500`}>
                    <CommunityFeedItem avatarSrc={Avtar1} title="Indonesia UI Designer" members={734} />
                    <CommunityFeedItem avatarSrc={Avatar2} title="Indonesia USX  Designer" members={125} />
                    <CommunityFeedItem avatarSrc={Avatar2} title="Prototype Club" members={124} />
                    <CommunityFeedItem avatarSrc={Avtar1} title="Indonesia UI Designer" members={663} />
                </div>
                <div className="mt-6 mb-10 text-center shadow-sm rounded-sm">
                    <a><span className="text-indigo-500  text-sm cursor-pointer">show 5 more &gt;</span>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
        </div>
   <div className="h-screen flex-1 p-7 relative">
      <Details />
   </div>
    </div>
  )
}

export default Navbar