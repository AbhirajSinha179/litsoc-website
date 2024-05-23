import { LitsocLogo } from "@/components/LitsocLogo";
import Link from "next/link";

const navConfig = {
  links: [
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/events",
      label: "Events",
    },
    {
      href: "/team",
      label: "Team",
    },
  ],
};

export default function Header() {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <LitsocLogo />
          <div className="flex items-center gap-6 transition-all ease-in-out">
            {navConfig.links.map((link) => (
              <Link key={link.href} href={link.href}>
                <p className="cursor-pointer text-sm hover:text-stone-300">{link.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </nav>
  );
}
