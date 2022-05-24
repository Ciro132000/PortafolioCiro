import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    NavBarComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardComponent,
    NavBarComponent
  ]
})
export class SharedModule { }
