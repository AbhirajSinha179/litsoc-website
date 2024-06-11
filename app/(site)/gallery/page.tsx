
import Header from "@/components/Header";
import SwiperCarousel from "@/components/SwiperCarousel"
import GalleryImage from "@/components/GalleryImage";

export default async function Gallery() {
 
    return (
      <main className="flex flex-col gap-20 items-center">
      <Header title="Gallery" />
      <GalleryImage/>
      </main>
    );
  }
