"use server";

export async function getWorkById(id: string) {
  const res = await fetch(`/api/works/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}