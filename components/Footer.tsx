import Link from "next/link";
import Image from "next/image";
import Instagram from "@/public/images/instagram.png";
import LinkedIn from "@/public/images/linkedIn.png";
import Facebook from "@/public/images/facebook.png";

export default function Footer() {
  return (
    <footer id="contact" className="w-full px-10">
      <div className="bg-[#543310] h-0.5 w-full rounded"></div>
      <div className="w-full border-t border-t-foreground/10 md:px-4 px-0 pb-6 p-2 flex justify-between h-full text-center text-xs">
        <p className=" md:hidden text-base flex justify-center mt-8  ">
          &#169; The Literary Society,
          <br />
          BIT Mesra
        </p>
        <p className="hidden md:flex text-base">
          &#169; The Literary Society, BIT Mesra
        </p>
        <div className="flex justify-end flex-col md:flex-row">
          <Link
            href={"https://www.facebook.com/LiterarySocietyBITMesra/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <Image src={Facebook} alt="" className="w-8 h-8 p-0.5 mx-2" /> */}
          </Link>
          <div className="border-r hidden md:block border-gray-300 h-6"></div>
          <Link
            href={"https://www.instagram.com/litsocbitm"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <Image
              src={Instagram}
              alt=""
              className="w-8 h-8 p-0.5 mx-2 my-2 md:my-0"
            /> */}
          </Link>
          <div className="border-r hidden md:block border-gray-300 h-6"></div>
          <Link
            href={"https://www.linkedin.com/company/literary-society-bit-mesra"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <Image src={LinkedIn} alt="" className="w-8 h-8 p-0.5 mx-2" /> */}
          </Link>
        </div>
      </div>
    </footer>
  );
}
