import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './formulae.routing';

import { FormulaeComponent } from './formulae.component';
import { SupervisoryComponent } from './supervisory/supervisory.component';
import { SupervisoryFormComponent } from './supervisory/form/supervisory.form.component';
import { TableComponent } from './supervisory/table/table.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    FormulaeComponent,
    SupervisoryComponent,
    SupervisoryFormComponent,
    TableComponent
  ]
})
export class FormulaeModule { }
