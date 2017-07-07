import { Routes, RouterModule } from '@angular/router';

import { IssuerDetailsComponent } from './details.component';

const routes: Routes = [
  {
    path: '',
    component: IssuerDetailsComponent
  }
];

export const routing = RouterModule.forChild(routes);
