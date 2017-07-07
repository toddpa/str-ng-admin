import { Routes, RouterModule } from '@angular/router';

import { ThirdpartyComponent } from './thirdparty.component';
import { KendoComponent } from './kendo/kendo.component';
import { AgComponent } from './ag/ag.component';

const routes: Routes = [
  {
    path: 'grid',
    component: ThirdpartyComponent,
    children: [
      { path: 'kendo', component: KendoComponent },
      { path: 'ag', component: AgComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
