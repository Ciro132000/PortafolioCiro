import { Component, OnInit } from '@angular/core';
import CiroInformation from '@data/CiroInformation.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ciro=CiroInformation
}
