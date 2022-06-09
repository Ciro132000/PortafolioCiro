import { Component, OnInit } from '@angular/core';
import CiroInformation from '@data/CiroInformation.json';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  public conocimientosNumber:number=0;
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

  viewMore(trabajos:any){
    if(this.conocimientosNumber + 12 >= trabajos.length ){
      this.mas=false;
    }
    
    this.conocimientosNumber += 6;
    
  }

  viewMenos(){
    if(this.conocimientosNumber - 6 === 0 ){
      this.mas=true;
    }
    this.conocimientosNumber -=6
  }
}
