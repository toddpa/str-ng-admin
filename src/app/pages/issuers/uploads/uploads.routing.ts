import { Routes, RouterModule } from '@angular/router';

import { IssuerUploadsComponent } from './uploads.component';

const routes: Routes = [
  {
    path: '',
    component: IssuerUploadsComponent
  }
];

export const routing = RouterModule.forChild(routes);
