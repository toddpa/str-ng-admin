import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { Pages } from './pages.component';
import { SRTDataService } from '../service/SRTDataService';
import { Configuration } from '../service/Configuration';
import { GridModule } from '@progress/kendo-angular-grid';
import { InvestorsComponent } from './investors/investors.component';
import { ProductComponent } from './product/product.component';
import { ReconciliationsComponent } from './product/reconciliations/reconciliations.component';
import { PortfoliosComponent } from './product/portfolios/portfolios.component';

@NgModule({
  imports: [
    GridModule,
    CommonModule,
    AppTranslationModule,
    NgaModule,
    routing
  ],
  declarations: [
    Pages,
    InvestorsComponent,
    ProductComponent,
    ReconciliationsComponent,
    PortfoliosComponent
  ],
  providers: [
    SRTDataService,
    Configuration
  ]
})
export class PagesModule {
}
