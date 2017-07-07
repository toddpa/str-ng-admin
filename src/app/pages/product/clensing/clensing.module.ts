import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClensingComponent } from './clensing.component';
import { MappingTableComponent } from './mapping-table/mapping-table.component';
import { routing } from './clensing.routing';
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
    ClensingComponent,
    MappingTableComponent
  ]
})
export class ClensingModule { }
