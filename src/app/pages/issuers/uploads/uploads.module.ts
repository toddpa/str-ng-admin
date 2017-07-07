import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { IssuerUploadsComponent } from './uploads.component';
import { RawTapesComponent } from './rawTapes/rawTapes.component';
import { routing } from './uploads.routing';
import { NgaModule } from '../../../theme/nga.module';


@NgModule({
  imports: [
    FormsModule,
    GridModule,
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    IssuerUploadsComponent,
    RawTapesComponent
  ]
})
export class IssuersUploadsModule { }
