
import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {Input, Button } from "@nextui-org/react";
import { MagnifyingGlassIcon, SunIcon, MoonIcon,Cog8ToothIcon } from "@heroicons/react/24/outline"; 
import { WalletIcon } from "@heroicons/react/24/outline"; 
import { FaWallet } from "react-icons/fa";
const Navbar = () => {
  return (    
      <header className="bg-slate-800 w-full flex justify-between py-4 px-6">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[20rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-transparent dark:bg-transparent rounded-full ring-1 ring-slate-700 focus:ring-0 focus:bg-transparent border-none",
          }}
          variant="bordered"
          placeholder="Search..."
          size="md"
          endContent={<MagnifyingGlassIcon  className="w-6 h-6" />}
          type="search"
        />
        <div className="flex items-center gap-4">
          <SunIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
          <Button radius="full" color="success" className="font-semibold py-6 px-6">
            Connect Wallet
            <FaWallet className="text-gray-700 w-6 h-6" />
          </Button>

        </div>
      </header>
     
    
  )
}

export default Navbar
