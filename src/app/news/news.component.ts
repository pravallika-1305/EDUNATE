import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news= {articles:[]};
  newstech= {articles:[]};
  newsSources= {sources:[]};
  newstop= {articles:[]};

  filterSource='google-news';
  newssports: any;
  constructor(private newsService: NewsService){}
  ngOnInit() {
    this.newsService.getTopHeadLines()
  		.subscribe(
  			response => this.news = response.json()
    );
    this.newsService.getTopHeadLinesTechnology()
  		.subscribe(
  			response => this.newstech = response.json()
    );
    this.newsService.getTopHeadLinesSports()
  		.subscribe(
  			response => this.newssports = response.json()
    );
    this.newsService.getTopHeadLines()
    .subscribe(
      response => this.newstop = response.json()
  );
    this.getnewsSources();
  }
  filterNews(source) {
    this.news={articles:[]};
    this.newsService.getNewBySource(source)
    .subscribe(
      response => this.news = response.json()
    );
  }
  getnewsSources() {
    this.newsService.getSources()
      .subscribe(
        response => this.newsSources = response.json()
      );
  } 
}
