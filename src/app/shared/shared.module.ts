import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    NavBarComponent,
    CardComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    CardComponent,
    NavBarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
