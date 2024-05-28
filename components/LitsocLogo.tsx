import LitsocIcon from "@/public/images/Litsoc-logo.png";
import BitIcon from "@/public/images/Birla_Institute_of_Technology_Mesra.png";
import Image from "next/image";
import Link from "next/link";

export function LitsocLogo() {
  return (
    <Link href={"/"} className="cursor-pointer flex items-center space-x-2 ">
      <Image
        className="ml-3"
        src={LitsocIcon}
        alt="Litsoc Logo"
        width={50}
        height={50}
      />
      <div className="border-r hidden sm:block border-gray-300 h-6"></div>
      <Image
        className="hidden sm:block"
        src={BitIcon}
        alt="BIT Logo"
        width={50}
        height={50}
      />
      <h1 className="text-2xl pl-1 hidden sm:inline-block">
        The Literary Society
      </h1>
    </Link>
  );
}
