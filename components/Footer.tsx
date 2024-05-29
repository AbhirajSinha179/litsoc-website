import Link from "next/link";
import {IconFacebook, IconLinkedin, IconInstagram, IconPhone} from "./Icons";

const Phone_Number="tel:+91-620-448-9339";

export default function Footer() {
  return (
    <footer id="contact" className="w-full sm:px-10 px-2">
      <div className="bg-[var(--custom-color)] h-0.5 max-w-full mx-4 rounded"></div>
      <div className="w-full border-t border-foreground/10 px-4 pb-6 py-2 flex  sm:flex-row flex-col  sm:justify-between justify-center items-center text-center text-xs">
        <p className="flex text-base">
          &#169; The Literary Society, BIT Mesra
        </p>
        <div className="flex flex-row sm:gap-4 gap-8  mt-4  sm:mt-0 ">
          <Link
            href="https://www.facebook.com/LiterarySocietyBITMesra/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <IconFacebook />
          </Link>
          <Link
            href="https://www.instagram.com/litsocbitm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <IconInstagram />
          </Link>
          <Link
            href="https://www.linkedin.com/company/literary-society-bit-mesra"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <IconLinkedin />
          </Link>
          <Link
            href={Phone_Number}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <IconPhone />
          </Link>
        </div>
      </div>
    </footer>
  );
}
