"use client"
import React, { useEffect, useState } from 'react';
import { getGalleryImages } from '@/utils/actions';
import Image from "next/image";

export default function GalleryImage() {
  const [litImages, setLitImages] = useState([]);
  const [rostraImages, setRostraImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        const fetchedImages = await  getGalleryImages();
        setLitImages(fetchedImages[1]);
        setRostraImages(fetchedImages[2]);
      } catch (err) {
        setError(err);
      }
    }

    fetchImages();
  }, []);

  if (error) {
    return <div>Error loading images: {error.message}</div>;
  }

  return (
    <div className='flex flex-col items-center gap-12 px-4'>
        <div className='text-3xl'>Litnight '23</div>
        <div className='m-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-9xl'>
        {litImages.map((image, index) => (

        <Image src={image} alt={"Image Not Available"}  
        width={200}
        height={200}
        layout="responsive"
        className="rounded-md" />

        ))}
        </div>
        <div className='text-3xl'>Rostra '24</div>
        <div className='m-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-9xl'>
        {rostraImages.map((image, index) => (

        <Image src={image} alt={"Image Not Available"}  
        width={200}
        height={200}
        layout="responsive"
        className="rounded-md" />

        ))}
        </div>
    </div>
  )
}