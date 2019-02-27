import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { News } from 'src/app/types/news';

library.add(faArrowRight);

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: News[] = [];


  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews()
      .subscribe(newsData => {this.news = newsData;
      });
  }

}
