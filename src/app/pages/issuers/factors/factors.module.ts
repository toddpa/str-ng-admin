import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FactorsComponent } from './factors.component';
import { FactorTableComponent } from './factor-table/factor-table.component';
import { routing } from './factors.routing';
import { NgaModule } from '../../../theme/nga.module';
import { GridModule } from '@progress/kendo-angular-grid';


@NgModule({
  imports: [
    GridModule,
    CommonModule,
    NgaModule,
    routing
  ],
  declarations: [
    FactorsComponent,
    FactorTableComponent
  ]
})
export class FactorsModule { }
