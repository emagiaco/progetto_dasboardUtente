import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { homedir } from 'os';
// import { HomeComponent } from '../home/home.component';
// import { MatDialog } from '@angular/material'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private router: Router) { }
    username: string;
    password: string;

  
    ngOnInit() {
    }
    login() : void {
      if(this.username == 'jdoe' && this.password == 'jdoe'){
      this.router.navigate(["user"]);
      // HomeComponent.visible;

      }else {
        alert("Credenziali non valide");
      }
    }
}