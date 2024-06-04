"use client";
import Link from "next/link";
import { LitsocLogo } from "./LitsocLogo";
import { navConfig } from "@/utils/constants";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { gilda } from "@/utils/fonts";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="mx-2 mt-1 w-full flex items-center justify-between ease-in-out" style={gilda.style}>
        <LitsocLogo />
        <div>
          <div className="hidden lg:flex justify-end gap-1 mr-2 mt-4 items-center">
            {navConfig.links.map((link) => (
              <Link key={link.href} href={link.href} className="flex-1">
                <p className={`cursor-pointer rounded py-3 px-4 hover:bg-[var(--custom-color)] hover:text-[var(--custom-color-2)] transition duration-200 ease-in-out hover:scale-110 text-lg
                ${pathname === link.href
                  ? `bg-[var(--custom-color)]  text-[var(--custom-color-2)] bg-opacity-60`
                  : `bg-transparent text-[var(--custom-color)]`}`}>
                  {link.label}
                </p>
              </Link>
            ))}
          </div>
          <button
            className="lg:hidden flex justify-end gap-1 mr-6 mt-4 scale-150 items-center cursor-pointer py-3 px-4"
            onClick={toggleNavbar}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="lg:hidden flex flex-col w-full justify-end gap-1 mr-2 items-center">
          {navConfig.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                "flex-1 w-full duration-200 transition ease-in-out hover:bg-[var(--custom-color)] hover:text-[var(--custom-color-2)] " +
                (pathname === link.href
                  ? "bg-[var(--custom-color)]  text-[var(--custom-color-2)] bg-opacity-60"
                  : "bg-transparent text-[var(--custom-color)]")
              }
            >
              <p
                className={
                  "cursor-pointer rounded py-3 px-4 text-center   text-xl"
                }
                onClick={toggleNavbar}
              >
                {link.label}
              </p>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
