import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import CiroInformation from '@data/CiroInformation.json';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  formularioContacto= new FormGroup({
    fullname : new FormControl('', [Validators.required]),
    affair: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    message:new FormControl('', [Validators.required, Validators.maxLength(700)])
  });

  send(){
    this.formularioContacto.reset()
  }


  mail=CiroInformation.information.correo
}
