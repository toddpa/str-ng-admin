import { Routes, RouterModule } from '@angular/router';

import { ClensingComponent } from './clensing.component';

const routes: Routes = [
  {
    path: '',
    component: ClensingComponent
  }
];

export const routing = RouterModule.forChild(routes);
