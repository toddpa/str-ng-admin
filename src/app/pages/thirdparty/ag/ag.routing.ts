import { Routes, RouterModule } from '@angular/router';

import { AgComponent } from './ag.component';

const routes: Routes = [
  {
    path: '',
    component: AgComponent
  }
];

export const routing = RouterModule.forChild(routes);
