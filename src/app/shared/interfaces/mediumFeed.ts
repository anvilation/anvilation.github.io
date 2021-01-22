import { Feed } from "./feed";
import { Item } from "./item";

export interface MediumFeed {
  feed: Feed;
  items: Item[];
}