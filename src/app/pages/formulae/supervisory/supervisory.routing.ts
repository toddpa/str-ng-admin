import { Routes, RouterModule } from '@angular/router';

import { SupervisoryComponent } from './supervisory.component';

const routes: Routes = [
  {
    path: '',
    component: SupervisoryComponent
  }
];

export const routing = RouterModule.forChild(routes);
