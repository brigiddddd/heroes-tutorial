import { HeroDetailComponent } from './hero-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroListComponent } from './hero-list.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HeroesComponent,
  //   children: [
  //     // { path: '', component: HeroesListComponent },
  //     { path: '', redirectTo: 'dashboard'},
  //     { path: 'dashboard', component: DashboardComponent },
  //     { path: 'detail/:id', component: HeroDetailComponent }
  //   ]
  // }
  { path: 'heroes', redirectTo: '/superheroes' },
  { path: 'hero/:id', redirectTo: '/superhero/:id' },
  { path: 'superheroes', component: HeroListComponent },
  { path: 'superhero/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {}
