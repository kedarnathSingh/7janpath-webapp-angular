import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers/headers.component';
import { FootersComponent } from './footers/footers.component';

@NgModule({
  imports: [
    CommonModule,
    HeadersComponent,
    FootersComponent
  ],
  exports: [
    HeadersComponent,
    FootersComponent
  ]
})
export class CoreModule { }
