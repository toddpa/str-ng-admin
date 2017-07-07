import { Routes, RouterModule } from '@angular/router';

import { KendoComponent } from './kendo.component';

const routes: Routes = [
  {
    path: '',
    component: KendoComponent
  }
];

export const routing = RouterModule.forChild(routes);
