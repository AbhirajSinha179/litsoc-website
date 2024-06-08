import { getGalleryImages } from "@/utils/actions";
import Image from "./Image";

export default async function GalleryImage() {
  const filteredImages = await getGalleryImages();
  if (!filteredImages) return null;


  return (
    <div className="flex flex-col items-center gap-12 px-4">
      <div className="text-3xl">Litnight '23</div>
      <div className="m-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-9xl">
        {filteredImages[1]?.map((image, index) => (
          <div key={`litnight-${index}`} className="relative w-[300px] h-[200px] overflow-hidden rounded-md">
            <Image
              src={image}
              alt="Image Not Available"
              layout="fill"
              objectFit="cover"
              className="transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
      <div className="text-3xl">Rostra '24</div>
      <div className="m-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-9xl">
        {filteredImages[2]?.map((image, index) => (
          <div key={`rostra-${index}`} className="relative w-[300px] h-[200px] overflow-hidden rounded-md">
            <Image
              src={image}
              alt="Image Not Available"
              layout="fill"
              objectFit="cover"
              className="transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
