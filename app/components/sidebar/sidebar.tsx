"use client"
import React from "react";
import { Link } from "@nextui-org/react";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AcmeLogo } from "@/app/Icons/Acmelogo";
import { MagnifyingGlassIcon, SunIcon, MoonIcon,Cog8ToothIcon } from "@heroicons/react/24/outline"; 
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { WalletIcon } from "@heroicons/react/24/outline"; 
import { RiHome5Fill } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineSwap } from "react-icons/ai";
import { MdOutlineCandlestickChart } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoMdHelpCircleOutline } from "react-icons/io";
import LinkItem from "./LinkItem";
const Sidebar = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("Market");

  const handleLinkClick = (link:string) => {
    if (link === "Market") {
      // If the link is "Market", prevent navigation
      setActiveLink(link);
    } else {
      setActiveLink(link);
      // For other links, navigate with the appropriate URL
      router.push(`/${link.toLowerCase().replace(" ", "-")}`);
    }
  };
  return (
    <aside className="flex flex-col w-72 bg-slate-800 ">
        <div className="px-6 flex items-center">
        <Link href="/">
        <Image
              src="/logo.svg"
              alt="Picture of the author"
              width={150}
              height={150}
            />
        </Link>
          
          {/* <p className="ml-2 text-lg font-bold text-gray-100">Coinshelter</p> */}
        </div>
        <nav className="flex flex-col flex-grow px-4 py-6">
          {/* <Link href="/" className={`flex items-center text-slate-600 font-bold hover:text-gray-900 hover:bg-green-300 rounded-lg px-2 py-3 transition-all my-2 ${isActive ? 'active:bg-green-300 active:text-gray-900' : ''}`}>
            <SunIcon className="w-6 h-6 mr-2" />
            Market
          </Link>
          <Link href="#" className="flex items-center  text-slate-600 font-bold hover:text-gray-900 hover:bg-green-300 rounded-lg px-2 py-3 transition-all">
            <CurrencyDollarIcon  className="w-6 h-6 mr-2" />
            Buy Crypto
          </Link>
          <Link href="#" className="flex items-center  text-slate-600 font-bold hover:text-gray-900 hover:bg-green-300 rounded-lg px-2 py-3 transition-all">
            <SunIcon className="w-6 h-6 mr-2" />
            Swap
          </Link>
          <Link href="#" className="flex items-center  text-slate-600 font-bold hover:text-gray-900 hover:bg-green-300 rounded-lg px-2 py-3 transition-all">
            <WalletIcon className="w-6 h-6 mr-2" />
            Exchange
          </Link>
          <Link href="#" className="flex items-center  text-slate-600 font-bold hover:text-gray-900 hover:bg-green-300 rounded-lg px-2 py-3 transition-all">
            <CurrencyDollarIcon className="w-6 h-6 mr-2" />
           Earn
          </Link>
          <Link href="#" className="flex items-center  text-slate-600 font-bold hover:text-gray-900 hover:bg-green-300 rounded-lg px-2 py-3 transition-all">
            <Cog8ToothIcon className="w-6 h-6 mr-2" />
            Settings
          </Link>
          <Link href="#" className="flex items-center  text-slate-600 font-bold hover:text-gray-900 hover:bg-green-300 rounded-lg px-2 py-3 transition-all">
            <InformationCircleIcon className="w-6 h-6 mr-2" />
            Help
          </Link> */}
          <LinkItem link="Market" activeLink={activeLink} onClick={handleLinkClick} icon={<RiHome5Fill className="w-6 h-6 mr-2" />}/>
          <LinkItem link="Buy Crypto" activeLink={activeLink} onClick={handleLinkClick} icon={<IoCartOutline className="w-6 h-6 mr-2" />}/>
          <LinkItem link="Exchange" activeLink={activeLink} onClick={handleLinkClick} icon={<AiOutlineSwap className="w-6 h-6 mr-2" />}/>
          <LinkItem link="Swap" activeLink={activeLink} onClick={handleLinkClick} icon={<MdOutlineCandlestickChart className="w-6 h-6 mr-2" />}/>
          <LinkItem link="Earn" activeLink={activeLink} onClick={handleLinkClick} icon={<RiMoneyDollarCircleLine className="w-6 h-6 mr-2" />}/>
          <LinkItem link="Settings" activeLink={activeLink} onClick={handleLinkClick} icon={<Cog8ToothIcon className="w-6 h-6 mr-2" />}/>
          <LinkItem link="Help" activeLink={activeLink} onClick={handleLinkClick} icon={<IoMdHelpCircleOutline className="w-6 h-6 mr-2" />}/>
           
          {/* Add more menu items as needed */}
        </nav>
      </aside>
  )
}

export default Sidebar
