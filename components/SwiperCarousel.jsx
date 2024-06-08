import React from 'react';
import { getGalleryImages } from '@/utils/actions';
import Carousel from '@/components/Carousel.jsx'

export default async function  SwiperCarousel(){
 	
	const fetchedImages= await getGalleryImages();
	if(!fetchedImages || !fetchedImages[0]){
		console.log("Carousel Images are not fetched");
	}
	return(
	<Carousel
	images={fetchedImages[0]}
	/>
	)
}
