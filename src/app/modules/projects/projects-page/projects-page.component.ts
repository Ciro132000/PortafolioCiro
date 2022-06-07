import { Component, OnInit } from '@angular/core';
import CiroInformation from '@data/CiroInformation.json';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ciro=CiroInformation

}
