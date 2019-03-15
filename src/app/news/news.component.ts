import { NewsserviceService } from './../services/newsservice.service';
import { Article } from './../services/newsArticle';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news:any;
  articles:Article[];
  constructor(private newsserv:NewsserviceService) { }

  ngOnInit() {
    this.newsserv.getNews('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7f114db118f048b0b557ac0570b0d9a8')
    .subscribe((data:any)=>{
      this.news=data;
      // console.log(this.news);
      this.articles=data.articles;
      console.log(this.articles);
      
     

    })
  }

}
