import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
//import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  key = 'f128ad422d024965bb9fd2a2830867e0';
  constructor(private http: Http) { }
  getTopHeadLines(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey='+this.key);
  }
  getTopHeadLinesTechnology(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey='+this.key);
  }
  getTopHeadLinesSports(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey='+this.key);
  }
  getNewBySource(source){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.key);
  }
  getSources(){
    return this.http.get('https://newsapi.org/v2/sources?apiKey='+this.key);
  }
}

