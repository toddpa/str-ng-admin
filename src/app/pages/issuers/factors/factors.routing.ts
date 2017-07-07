import { Routes, RouterModule } from '@angular/router';

import { FactorsComponent } from './factors.component';

const routes: Routes = [
  {
    path: '',
    component: FactorsComponent
  }
];

export const routing = RouterModule.forChild(routes);
