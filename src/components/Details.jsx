
import Avatar from "./Avatar";
import Tabs from "./Tabs";
import {HiOutlineMail} from 'react-icons/hi';
import Header from "./Header";
import imagUser from '../assets/imagesProfile.jpeg';
import {tabsData  } from "../data/data.jsx";

const ProfilInfo = () => {
    return (
        <div>
          <Header />
          <div className="w-full h-24 bg-gradient-to-r from-blue-900  via-purple-800 to-cyan-900 rounded-md relative">
            <div className="absolute -bottom-14 left-12 transform -translate-x-1/9">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <img
                  src={imagUser}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="lg:flex-row flex flex-col">
            <Avatar className="h-screen" />
            <Tabs tabsData={tabsData} className="h-screen" />
          </div>
        </div>
      );
};

export default ProfilInfo;
