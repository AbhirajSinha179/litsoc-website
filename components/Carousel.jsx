"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { getGalleryImages } from "@/utils/actions";
import Image from "next/image";

export default function Carousel() {
  const [images, setImages] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        const filteredImages = await getGalleryImages();
        setImages(filteredImages[0]);
      } catch (err) {
        setError(err);
      }
    }

    fetchImages();
  }, []);

  if (error) {
    return <div>Error loading images: {error.message}</div>;
  }

  const coverflowEffectConfig = {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  };
  const autoplay = {
    enabled: true,
    delay: 7000,
    waitForTransition: false,
    disableOnInteraction: false,
    stopOnLastSlide: false,
    reverseDirection: false,
    pauseOnMouseEnter: true,
    dataSwiperAutoplay: 2000,
  };

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={coverflowEffectConfig}
      pagination={{ clickable: true }}
      initialSlide={3}
      loop={true}
      autoplay={autoplay}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className=" max-w-[100vw] h-[66vw] sm:h-[400px] sm:max-w-[600px] "
    >
      {images.map((image, index) => (
        <SwiperSlide
          key={index}
          className="bg-center bg-cover w-[300px] h-[500px] lg:w-[450px] lg:h-[500px] "
        >
          <div className="flex justify-center p-36 text-7xl w-[300px] h-[500px] lg:w-[450px] lg:h-[500px]">
            Loading <span className="animate-pulse ">...</span>
          </div>

          <Image
            src={image}
            alt={"Image Not Available"}
            className="block w-[300px] h-[500px] lg:w-[600px] lg:h-[400px] sm:rounded-md"
            layout="fill"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
