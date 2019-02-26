import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import * as $ from "jquery";

export interface PeriodicElement {
  name: string;
  position: number;
  data: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', data: 1.0079},
  {position: 2, name: 'Helium', data: 4.0026},
  {position: 3, name: 'Lithium', data: 6.941},
  {position: 4, name: 'Beryllium', data: 9.0122},
  {position: 5, name: 'Boron', data: 10.811},
  {position: 6, name: 'Carbon', data: 12.0107},
  {position: 7, name: 'Nitrogen', data: 14.0067},
  {position: 8, name: 'Oxygen', data: 15.9994},
  {position: 9, name: 'Fluorine', data: 18.9984},
  {position: 10, name: 'Neon', data: 20.1797},
];

@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.component.html',
  styleUrls: ['./eventi.component.css']
})
export class EventiComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit() {
    var params = {};
    params['token'] = 'F6E5ODJ6JCOZ7HTDOVHW';
    params['location.address'] = 'Rome';

    $.ajax({
      url:'https://www.eventbriteapi.com/v3/events/search/',
      data:params,
      success: function(data){
        for (let i = 0; i < 10; i++) {
          $('#eventi').append('<tr> <td>'+(data.events[i].start.local)+'</td>'+'<td>'+(data.events[i].name.text)+'</td></tr>');     
        } this.dataSource=data.events;
      },
      error: function(xhr){
        console.log(xhr)
      }
    });
  }
}
