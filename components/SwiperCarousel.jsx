import React from 'react';
import { getGalleryImages } from '@/utils/actions';
import Carousel from '@/components/Carousel'

export default async function  SwiperCarousel(){
 	
	const fetchedImages= await getGalleryImages();
	if(!fetchedImages || !fetchedImages[0]){
	return <div>Failed to load carousel images. Please try again later.</div>;
	}
	return(
	<Carousel
	images={fetchedImages[0]}
	/>
	)
}
