import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';
import { ViewComponent } from './pages/view/view.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  // {
  //   path: 'work', component: WorkComponent
  // },
  // {
  //   path: 'experiences', component: ExperiencesComponent
  // },
  {
    path: 'blog', component: BlogComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  // {
  //   path: 'view', component: ViewComponent
  // },
  // {
  //   path: 'portfolio', component: PortfolioComponent
  // },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
