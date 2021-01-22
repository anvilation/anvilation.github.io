import { Component, OnInit } from '@angular/core';
import { Feed } from '../interfaces';
import { MediumService } from '../medium.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  private url = 'https://medium.com/feed/@mbarben';
  feed: Feed = {
    title:'',
    description:'',
    author:'',
    image:'',
    link:'',
    url:'',
    items: []
  };
  constructor(private medium: MediumService) {
    this.feed.items = [];
   }

  ngOnInit(): void {
    this.fetchEntries()
  }


  fetchEntries(){
    this.medium.fetchFeed(this.url)
      .then((res) => {
        this.feed = res;
        this.feed.items = this.feed.items.filter(i => {
          if (i.categories.length > 0) {
            
            return i;
          }
        })
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });


  }
}
