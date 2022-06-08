import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FiltroPipe } from './pipes/filtro.pipe';

@NgModule({
  declarations: [
    ProjectsPageComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ]
})
export class ProjectsModule { }
