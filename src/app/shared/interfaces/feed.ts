  
import { Item } from "./item";

export interface Feed {
  title: string;
  description?: string;
  author?: string;
  image?: string;
  link?: string;
  url?: string;
  items?: Item[];
}