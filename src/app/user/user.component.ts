import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { Router, RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  recuperoEventi(){
    var params = {};
    params['token'] = 'F6E5ODJ6JCOZ7HTDOVHW';
    params['location.address'] = 'Rome';

    $.ajax({
      url:'https://www.eventbriteapi.com/v3/events/search/',
      data:params,
      success: function(data){
        for (let i = 0; i < data.events.length; i++) {
          $('#datiana').append('<tr> <td>'+(data.events[i].name.text)+'</td>'+'<td>'+(data.events[i].description.html)+'</td></tr>');
        }
      },
      error: function(xhr){
        console.log(xhr)
      }
    });
  }

  redirect(router: Router){
    this.router.navigateByUrl('home');
  }

}