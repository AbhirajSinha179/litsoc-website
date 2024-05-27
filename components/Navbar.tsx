import Link from "next/link";
import { LitsocLogo } from "./LitsocLogo";
import { navConfig } from "@/utils/constants";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-6xl flex justify-between items-center p-3 text-sm">
        <LitsocLogo />
        <div className="flex items-center gap-1">
          {navConfig.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex-1 py-2 rounded transition duration-300 ease-in-out hover:bg-[#543310] hover:text-[#F8F4E1] hover:scale-110 px-4 "
            >
              <p className="cursor-pointer text-sm">{link.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}