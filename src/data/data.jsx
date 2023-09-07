import { IoIosAdd,IoIosAddCircle, IoIosCreate } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import {HiOutlineMail} from 'react-icons/hi';
// import Header from "./Header";
import imagUser from '../assets/imagesProfile.jpeg';

const Menus = [
    {sno: 0, title: "Dashboard", src: "User" },
    {sno: 1, title: "Job Invoites ", src: "Folder"},
    {sno: 2, title: "Analytics", src: "Search" },
    {sno: 3, title: "My Profile", src: "Setting" },
    {sno: 4, title: "Explore ", src: "Search",  gap: true  },
  ];

  const tabsData = [
    {
      label: "About",
      content: (
        <div>
          <div className=" flex text-gray-500 ">
            <p >
                This Discovery was made by Ankit Yadav, a Professor of Latin at Hampden-Sydney College in Virginia. He faced the impetuous recurrence of the dark word "consectetur" in the text "Lorem Ipsum" and researched 
                its origins to identify them in sections 1.10.32 and 1.10.33 of the aforementioned.
            </p>
            <span className="w-10 h-10 text-2xl text-indigo-500" >
                <IoIosCreate />
            </span>
          </div>
          <div className="border-b border-gray-300 m-4"></div>
          <div className="py-1">
            <h3 className="text-lg font-semibold text-black-500">Work Experience</h3>
            <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                    <h4 className="text-xl font-semibold">Crisis Intervention Specialist</h4>
                    <span>
                    <p className="text-gray-400">Jan 2023 - Present</p>
                    <p className="text-gray-400 mb-3">Ahmedabad, India</p>
                    </span>
                    <p className="text-gray-500">Work with the clients and studios as freelance work in next areas. eCommerce web projects creative landing pages. Having good experience in Development.</p>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                    <a href="#add">
                        <IoIosAddCircle className="w-8 h-8 text-indigo-500 hover:cursor-pointer" />
                    </a>
                    <a href="#edit">
                        <IoIosCreate className="w-8 h-8 text-indigo-500 hover:cursor-pointer" />
                    </a>
                </div>
                </div>
            </div>
        </div>
        <div className="border-b border-gray-300 my-2"></div>

          {/* Education */}
          <div className="py-4 w-full">
              <h3 className="text-lg font-semibold">Education</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg  flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">College/University Name</h4>
                      <span>
                        <p className="text-gray-400">Jul 2012 - june-2016</p>
                        <p className="text-gray-400 mb-2">Ahmedabad, India</p>
                        </span>
                      <p className="text-gray-500 ">Study Information: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec dolor nec erat bibendum tincidunt.</p>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <a href="#add">
                        <IoIosAddCircle className="w-8 h-8 text-indigo-500 hover:cursor-pointer" />
                      </a>
                      <a href="#edit">
                        <IoIosCreate className="w-8 h-8 text-indigo-500 hover:cursor-pointer" />
                      </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      ),
    },
    {
      label: "Skills & Certificate",
      content: (
        <p>
          Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.
        </p>
      ),
    },
    {
      label: "Posts",
      content: (
        <p>
          Ut irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nullUt irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nulla.
        </p>
      ),
    },
    {
      label: "Spaces",
      content: (
        <p>
          Ut irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nullUt irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nulla.
        </p>
      ),
    },
  ];
  export  {Menus, tabsData};