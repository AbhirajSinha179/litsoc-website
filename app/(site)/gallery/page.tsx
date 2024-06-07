
import Header from "@/components/Header";
import Carousel from "@/components/Carousel"
import GalleryImage from "@/components/GalleryImage";

export default async function Gallery() {
 
    return (
      <main className="flex flex-col gap-20 items-center">
      <Header title="Gallery" />
      <Carousel/>
      <GalleryImage/>
      </main>
    );
  }