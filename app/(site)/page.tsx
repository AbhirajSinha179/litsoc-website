import Link from "next/link";
import { gilda } from "@/utils/fonts";
import Image from "next/image";

const worksImage = "/images/worksimage.png";
const eventsImage = "/images/eventsimage.jpg";
const galleryImage = "/images/gallery.jpg";

const landingCardsConfig = [
  {
    title: "Works",
    image: worksImage,
    href: "/works",
  },
  {
    title: "Events",
    image: eventsImage,
    href: "/events",
  },
  {
    title: "Gallery",
    image: galleryImage,
    href: "/gallery",
  },
];

export default async function Index() {
  return (
    <div className="relative flex-1 w-full flex flex-col gap-10 items-center">
      <div className="absolute top-0 z-[-2] h-full w-full rotate-180 transform  bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
      <div className="animate-in flex-1 flex flex-col gap-10 opacity-0 px-3 ">
        <div className="w-full flex flex-col gap-4 sm:gap-8 items-center">
          <h1
            className="text-5xl sm:text-7xl lg:text-9xl !leading-tight mx-auto sm:text-center"
            style={gilda.style}
          >
            The Literary Society <br />{" "}
            <span className="opacity-90">BIT Mesra</span>
          </h1>
          <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-[--custom-color] to-transparent my-8" />
        </div>
        <main className="flex-1 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl my-12">
            {landingCardsConfig.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="flex flex-col bg-orange-200 rounded-lg items-center justify-center transition duration-300 hover:scale-105 ease-in-out"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  className="overflow-hidden w-full rounded-t-lg"
                  width={400}
                  height={400}
                />
                <h1 className="text-xl lg:text-2xl my-4" style={gilda.style}>{card.title}</h1>
              </Link>
            )) ?? null}
          </div>
        </main>
      </div>
    </div>
  );
}
