import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { routing } from './details.routing';

import { IssuerDetailsComponent } from './details.component';
import { ContactsComponent } from './contacts/contacts.component';


@NgModule({
  imports: [
    GridModule,
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    IssuerDetailsComponent,
    ContactsComponent
  ]
})
export class IssuersDetailsModule { }
