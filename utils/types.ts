import { UUID } from "crypto"

export interface WorkCardProps {
  id: number,
  created_at: string,
  name: string,
  body: string,
  publish_date: null,
  type: string,
  authors: string,
  language: string,
  image_url: string
}

export interface TeamProps {
  id: UUID,
  created_at: string ,
  name: string,
  joining_year: number,
  position: string,
  position_2: string,
  instagram_id?: string
}