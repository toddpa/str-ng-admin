import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './formulae.routing';

import { FormulaeComponent } from './formulae.component';
import { SupervisoryComponent } from './supervisory/supervisory.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    FormulaeComponent,
    SupervisoryComponent
  ]
})
export class FormulaeModule { }
