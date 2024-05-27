"use client"
import Link from "next/link";
import { LitsocLogo } from "./LitsocLogo";
import { navConfig } from "@/utils/constants";
import { Menu, X } from "lucide-react";
import React,{ useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const[isOpen,setIsOpen] =useState(false);
  const pathname = usePathname();

  const toggleNavbar=()=>{
    setIsOpen(!isOpen);
  }

  return (
    <>
    <nav className="ml-2 mr-2 mt-1 w-full flex justify-between ease-in-out">

        <LitsocLogo />
        <div>
        <div className="hidden lg:flex  justify-end gap-1 mr-2 mt-4 items-center">
          {navConfig.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex-1     "
            >
              <p className="cursor-pointer rounded py-3 px-4 hover:bg-[#543310] hover:text-[#F8F4E1] hover:scale-110 text-xl">{link.label}</p>
            </Link>
          ))}
        </div>
          <button className="lg:hidden flex justify-end gap-1 mr-6 mt-4 scale-150 items-center cursor-pointer py-3 px-4" onClick={toggleNavbar}>{isOpen ? <X/>:<Menu/>}</button>
        </div>
    </nav>
    {isOpen && (
      <div className="lg:hidden flex flex-col w-full justify-end gap-1 mr-2 items-center">
      {navConfig.links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={"flex-1   w-full  hover:bg-[#543310] hover:text-[#F8F4E1] "+ (pathname === link.href ? 'bg-[#543310e5] text-[#F8F4E1]' : 'bg-transparent text-[#543310]')}
          
        >
          <p className={"cursor-pointer rounded py-3 px-4 text-center   text-xl"} onClick={toggleNavbar} >{link.label}</p>
        </Link>
      ))}
    </div>
    )}
    </>
  );
}