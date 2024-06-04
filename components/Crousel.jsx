"use client"
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/effect-coverflow'; 
import 'swiper/css/pagination'; 
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { getGalleryImages } from '@/utils/actions';
import Image from "next/image";

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        const fetchedImages = await  getGalleryImages();
        console.log(fetchImages )
        setImages(fetchedImages);
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

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={coverflowEffectConfig} 
      pagination={{ clickable: true }}
      initialSlide={3}
      loop={true}
      modules={[EffectCoverflow, Pagination]}
      className=" max-w-[80vw] h-[80vw] sm:h-[60vh] lg:max-w-[900px]  lg:h-[500px] "
    >
      {images.map((image, index) => (
        <SwiperSlide
          key={index}
          className='bg-center bg-cover w-[300px] h-[500px] lg:w-[450px] lg:h-[500px] '
          >

            <div className='flex justify-center p-36 text-7xl w-[300px] h-[500px] lg:w-[450px] lg:h-[500px]'>Loading <span className='animate-pulse '>...</span></div>
            
            <Image src={image} alt={"Image"} className='block w-[300px] h-[500px] lg:w-[450px] lg:h-[500px] rounded-md' layout='fill' />
        
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
