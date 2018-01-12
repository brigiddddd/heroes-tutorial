import { NgModule } from '@angular/core';
import { Routes,
         RouterModule }        from '@angular/router';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisCenterComponent } from './crisis-center.component';

// At the top level, paths that start with '/' refer to the root of the application. Child routes extend the path
const crisisCenterRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(crisisCenterRoutes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule {}
