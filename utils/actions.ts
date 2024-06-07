"use server";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

export async function getWorkById(id: number) {
  const { data, error } = await supabase.from("works").select().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return data[0];
}

export async function getWorks() {
  const { data, error } = await supabase.from("works").select();
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function getTeam() {
  const { data, error } = await supabase.from("team").select();
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function getGalleryImages() {
  const  publicURL = supabase.storage.from('litsoc-images').getPublicUrl('Gallery')
 
  const { data, error } = await supabase.storage.from('litsoc-images').list('Gallery')
  const { data: data2, error: error2 } = await supabase.storage.from('litsoc-images').list('Gallery/Litnight')
  const { data: data3, error: error3 } = await supabase.storage.from('litsoc-images').list('Gallery/Rostra')

  if (error|| error2 || error3) {
    console.error('Error fetching images:', error);
    return [];
  }
  if(!data || !data2 || !data3){
    console.error('No images present in database');
    return [];
  }

  const images = await Promise.all(data.filter((val)=>val.name!='Litnight').filter((val)=>val.name!='Rostra').map(async (file) => {
    if(file.name=='Litnight'|| file.name=='Rostra') return file.name;
    const  imageUrl  = publicURL.data.publicUrl+'/'+file.name
    return imageUrl;
  }));
  
  const litImages = await Promise.all(data2.map(async (file) => {
    const  imageUrl  = publicURL.data.publicUrl+'/Litnight/'+file.name
    return imageUrl;
  }));

  const rostraImages = await Promise.all(data3.map(async (file) => {
    const  imageUrl  = publicURL.data.publicUrl+'/Rostra/'+file.name
    return imageUrl;
  }));

  return [images,litImages,rostraImages];
}