import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsService } from 'src/app/service/news.service';
import { News } from 'src/app/news';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faArrowRight);

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: any;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews()
      .subscribe(res => this.news = res);
  }

}
