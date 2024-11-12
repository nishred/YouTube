import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";

import { FaYoutube } from "react-icons/fa";

import { FaSearch } from "react-icons/fa";

import { FaMicrophone } from "react-icons/fa";

import { MdOutlineCreateNewFolder } from "react-icons/md";

import { IoIosNotifications } from "react-icons/io";

import { FaRegUserCircle } from "react-icons/fa";



const Header = ({setActive}) => {


  return (
    <header className="grid grid-cols-[auto_1fr_auto] grid-rows-1 px-4 py-4 shadow-lg">

      <div className="flex gap-8 items-center">
      <GiHamburgerMenu size={32} onClick={() => {

            setActive((active) => !active)


      }}/>

      <div className="flex items-center gap-1">
      <FaYoutube color="red" size={48} />
      <h1 className="text-xl">Youtube</h1>
      </div>
      </div>

      <form className="flex justify-center items-center">

      <input className="w-1/2 py-2 rounded-l-full px-2 border border-solid border-black outline-none"  type="text" placeholder="Search" />
      <button className="border-solid border-black border w-16 h-[2.6rem] flex justify-center items-center rounded-r-full">
      <FaSearch size={16}/>
      </button>
      
      <FaMicrophone className="ml-4" size={24}/>
      </form>

      <div className="flex gap-4 items-center">
      <MdOutlineCreateNewFolder size={24}/>
      <IoIosNotifications size={24}/>
      <FaRegUserCircle size={24}/>
      </div>
    </header>
  );
};

export default Header;
