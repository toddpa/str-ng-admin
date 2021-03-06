import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'editors', loadChildren: './editors/editors.module#EditorsModule' },
      { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      { path: 'ui', loadChildren: './ui/ui.module#UiModule' },
      { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
      { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
      { path: 'thirdparty', loadChildren: './thirdparty/thirdparty.module#ThirdpartyModule' },
      { path: 'srt/issuer-details', loadChildren: './issuers/details/details.module#IssuersDetailsModule' },
      { path: 'srt/issuer-uploads', loadChildren: './issuers/uploads/uploads.module#IssuersUploadsModule' },
      { path: 'srt/issuer-factors', loadChildren: './issuers/factors/factors.module#FactorsModule' },
      { path: 'srt/conversion', loadChildren: './product/clensing/clensing.module#ClensingModule' },
      { path: 'formulae', loadChildren: './formulae/formulae.module#FormulaeModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
