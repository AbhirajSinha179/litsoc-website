import Link from "next/link";
import { FacebookIcon, LinkedinIcon, InstagramIcon, PhoneIcon } from "./Icons";

const PhoneNumber="tel:+91-620-448-9339";

export default function Footer() {
  return (
    <footer id="contact" className="w-full md:px-10 px-2">
      <div className="bg-[#543310] h-0.5 max-w-full mx-4 rounded"></div>
      <div className="w-full border-t border-foreground/10 md:px-4 px-0 pb-6 py-2 flex justify-between items-center text-center text-xs">
        <p className="text-base md:hidden mt-4">
          &#169; The Literary Society,
          <br />
          BIT Mesra
        </p>
        <p className="hidden md:flex text-base">
          &#169; The Literary Society, BIT Mesra
        </p>
        <div className="grid grid-cols-2 md:flex md:flex-row gap-4 mt-4 mx-2 md:mt-0 md:mx-0">
          <Link
            href="https://www.facebook.com/LiterarySocietyBITMesra/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <FacebookIcon />
          </Link>
          <Link
            href="https://www.instagram.com/litsocbitm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <InstagramIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/company/literary-society-bit-mesra"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <LinkedinIcon />
          </Link>
          <Link
            href={PhoneNumber}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <PhoneIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
}
