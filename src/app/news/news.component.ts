import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function(){
      $.ajax({
       type:'GET',
       url:"https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=8ec58347383a461e8fbc05407c025e30&pageSize=10",
       data:'html',
        success: function(result){
          for(var i=0;i<10;i++)

            $("#news").append("<tr> <td>"+(result.articles[i].title)+"</td>"+"<td>"+(result.articles[i].source.name)+"</td>");
        },
        error: function(xhr) {
        console.log(xhr);
        }
      });
    });
  }
  
}
