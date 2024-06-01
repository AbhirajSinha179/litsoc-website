"use server";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.SUPABASE_URL as string, process.env.SUPABASE_ANON_KEY as string);

export async function getWorkById(id: string) {
  const { data, error }  = await supabase.from("works").select().eq("id", id);

  if(error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getWorks() {
  const {data, error} = await supabase.from("works").select();
  if(error) {
    throw new Error(error.message);
  }
  return data;
}

export async function getTeam() {
  const {data, error} = await supabase.from("team").select();
  if(error) {
    throw new Error(error.message);
  }
  return data;
}