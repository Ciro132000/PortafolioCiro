import { Component, OnInit } from '@angular/core';

import CiroInformation from '@data/CiroInformation.json';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ciro=CiroInformation
}
