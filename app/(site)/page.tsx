import Link from 'next/link';
import Header from "@/components/Header";
import { gilda } from "@/utils/fonts";

const worksImage = "/images/worksimage.png";
const eventsImage = "/images/eventsimage.jpg";
const galleryImage = "/images/gallery.jpg";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-10 items-center">
      <div className="animate-in flex-1 flex flex-col gap-10 opacity-0 px-3 ">
        <div className="w-full flex flex-col gap-4 sm:gap-8 items-center">
          <h1 className="text-3xl md:text-6xl lg:text-7xl leading-tight mx-auto text-center" style={gilda.style}>
            The Literary Society <br />{" "}
            <span className="opacity-90">BIT Mesra</span>
          </h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-4/5">
            <Link href="/works" className="rounded-lg bg-orange-200 flex flex-col items-center justify-center text-center transform transition-transform duration-300 hover:scale-105">
              <img src={worksImage} alt="Works" className="w-full h-auto rounded-t-lg" />
              <div className="p-3">
                <p className="text-xl">Works</p>
              </div>
            </Link>
            <Link href="/events" className="rounded-lg bg-orange-200 flex flex-col items-center justify-center text-center transform transition-transform duration-300 hover:scale-105">
              <img src={eventsImage} alt="Events" className="w-full h-auto rounded-t-lg" />
              <div className="p-3">
                <p className="text-xl">Events</p>
              </div>
            </Link>
            <Link href="/gallery" className="rounded-lg bg-orange-200 flex flex-col items-center justify-center text-center transform transition-transform duration-300 hover:scale-105">
              <img src={galleryImage} alt="Gallery" className="w-full h-auto rounded-t-lg" />
              <div className="p-3">
                <p className="text-xl">Gallery</p>
              </div>
            </Link>
          </div>
        </div>
        <main className="flex-1 flex flex-col gap-6"></main>
      </div>
    </div>
  );
}
