import { UUID } from "crypto";

export interface WorkCardProps {
  id: number;
  created_at: string;
  name: string;
  body: string;
  publish_date?: string;
  type: string;
  author: string;
  language: string
  // url: string;
}

export interface TeamProps {
  id: UUID,
  created_at: string ,
  name: string,
  joining_year: number,
  position: string,
  instagram_id?: string
}