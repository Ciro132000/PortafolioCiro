import { Component, OnInit } from '@angular/core';
import CiroInformation from '@data/CiroInformation.json';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  public numberProject:number=0;
  public mas:boolean=true;

  constructor() { }

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  ciro=CiroInformation

  seeMore(trabajos:any){
    if(this.numberProject + 6 >= trabajos.length ){
      this.mas=false;
    }
    
    this.numberProject += 3;
    
  }

  seeLess(){
    if(this.numberProject - 3 === 0 ){
      this.mas=true;
    }
    this.numberProject -=3
  }
}
