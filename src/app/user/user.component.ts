import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

var request = new XMLHttpRequest();

request.open('GET', 'https://www.eventbriteapi.com/v3/events/search/?token=3FSAZUKBUQQ4WO7GGMBE');

request.setRequestHeader('Authorization', 'Bearer 3FSAZUKBUQQ4WO7GGMBE');
request.setRequestHeader('Content-Type', 'application/json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
    
  }
};

request.send();

