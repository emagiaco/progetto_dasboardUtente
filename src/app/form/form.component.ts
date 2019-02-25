import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  mioForm: FormGroup;

  constructor() { 
    this.mioForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(4)]),
      cognome: new FormControl('', [Validators.required, Validators.minLength(2)]),
      citta: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      myDatepicker: new FormControl('', [Validators.required]) 
    });
   }

  ngOnInit() {
  }
  get nome(){return this.mioForm.get('nome')}
  get cognome(){return this.mioForm.get('cognome')}
  get citta(){return this.mioForm.get('citta')}
  get email(){return this.mioForm.get('email')}
  get date(){return this.mioForm.get('date')}

  registrazione() : void {
    alert(`Bene, il tuo profilo è stato registrato`)
  }

}