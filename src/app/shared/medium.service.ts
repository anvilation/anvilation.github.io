import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import {Feed, MediumFeed} from './interfaces';
const rssConverter = "https://api.rss2json.com/v1/api.json";
const rssParam = "rss_url";

// based on https://github.com/pschoffer/ng-medium/blob/master/projects/ng-medium

@Injectable({
  providedIn: 'root'
})
export class MediumService {

  
  constructor(private http: HttpClient) { }


  async fetchFeed(url:string): Promise<Feed> {
    const params = new HttpParams().set(rssParam, url);

    const result = await this.http
      .get<MediumFeed>(rssConverter, { params })
      .toPromise();
    return this.mapResponse(result);
  }

  private mapResponse(input: MediumFeed): Feed {
    const feed: Feed = input.feed;
    if (feed) {
      feed.items = input.items;
    }
    return feed;
  }
}
