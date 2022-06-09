import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeContentComponent } from './home-content/home-content.component';
import { FiltroPipe } from './pipes/filtro.pipe';


@NgModule({
  declarations: [
    HomePageComponent,
    HomeContentComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
