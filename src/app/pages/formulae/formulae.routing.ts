import { Routes, RouterModule } from '@angular/router';

import { FormulaeComponent } from './formulae.component';
import { SupervisoryComponent } from './supervisory/supervisory.component';

const routes: Routes = [
  {
    path: '',
    component: FormulaeComponent,
    children: [
      { path: 'supervisory', component: SupervisoryComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
