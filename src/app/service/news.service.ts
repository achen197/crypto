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
  }

  setNews() {
    this.getNews().subscribe(data => {
      console.log(data);
    })
  }

}
