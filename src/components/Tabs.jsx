import { useState } from "react";


const Tabs = ({ tabsData }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="h-full lg:w-2/3 lg:pl-2 flex flex-col">
      <div className="flex space-x-3 border-b mb-0">
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`px-4 py-2 cursor-pointer border-b-4 transition-colors duration-300 text-black-400 ${
                idx === activeTabIndex
                  ? "border-indigo-500"
                  : "border-transparent hover:border-gray-200"
              }`}
              onClick={() => setActiveTabIndex(idx)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="flex-1 py-4">
        <div className="rounded-lg h-full">
          {tabsData.map((tab, idx) => (
            <div
              key={idx}
              className={` text-black-500 ${
                idx === activeTabIndex ? "block" : "hidden"
              } card-content`}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
