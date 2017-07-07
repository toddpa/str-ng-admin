import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { routing } from './thirdparty.routing';
import { AgGridModule } from 'ag-grid-angular/main';

import { ThirdpartyComponent } from './thirdparty.component';
import { KendoComponent } from './kendo/kendo.component';
import { KendoGridComponent } from './kendo/kendo-grid/kendoGrid.component';
import { AgComponent } from './ag/ag.component';
import { AgGridComponent } from './ag/ag-grid/ag-grid.component';


@NgModule({
  imports: [
    GridModule,
    CommonModule,
    FormsModule,
    routing,
    AgGridModule.withComponents([])
  ],
  declarations: [
    ThirdpartyComponent,
    KendoGridComponent,
    KendoComponent,
    AgComponent,
    AgGridComponent
  ]
})
export class ThirdpartyModule { }
