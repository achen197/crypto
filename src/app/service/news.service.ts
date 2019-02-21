import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  url = "https://min-api.cryptocompare.com/data/v2/news/?feeds=cryptocompare,cointelegraph,coindesk";
  private news;

  constructor(private http: HttpClient) {
   }

  getNews() {
    return this.http.get('./assets/data/news-details.json');
    // return this.http.get(this.url);
    // let result = this.http.get(this.url);
    // debugger;
    // return result;
  }

  setNews() {
    this.getNews().subscribe(data => {
      console.log(data);
    })
  }

}
