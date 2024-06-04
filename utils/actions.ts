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

  if (error) {
    console.error('Error fetching images:', error);
    return [];
  }
  const images = await Promise.all(data.map(async (file) => {
    const  data  = publicURL.data.publicUrl+'/'+file.name
    return data;
  }));


  return images;
}