import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from 'src/app/types/news';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface newsResponse {
  Data: News[];
}

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  private newsData
  news: News[];

  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]> {
    this.newsData = this.http.get<newsResponse>("https://min-api.cryptocompare.com/data/v2/news/?feeds=cryptocompare,cointelegraph,coindesk")
    .pipe(map(n => n.Data.map(oldDate => ({...oldDate, date: new Date(oldDate.published_on * 1000)}))));
    return this.newsData;
  }

}
