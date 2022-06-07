import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  Object = Object;

  @Input() dataProject:any

  @Input() index:any

  constructor() { }

  ngOnInit(): void {
  }

  projetcSelect:any

  change(){

  }
}
