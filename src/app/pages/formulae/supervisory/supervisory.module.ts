import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './supervisory.routing';

import { SupervisoryComponent } from './supervisory.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    SupervisoryComponent
  ]
})
export class SupervisoryModule { }
