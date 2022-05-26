import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContentComponent } from './home-content/home-content.component';


const routes: Routes = [
  {
    path:'',
    component: HomeContentComponent
  },
  {
    path:'about',
    loadChildren: ()=> import('@modules/about/about.module').then(m=>m.AboutModule)
  },
  {
    path:'contact',
    loadChildren: ()=> import('@modules/contact/contact.module').then(m=>m.ContactModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('@modules/projects/projects.module').then(m=>m.ProjectsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
