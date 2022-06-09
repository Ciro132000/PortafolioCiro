import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.scroll();
  }

  scroll():void{
    window.addEventListener("scroll", ()=>{
      var header:any = document.querySelector("nav");
      header.classList.toggle("abajo", window.scrollY>0);
    })
  }

}
