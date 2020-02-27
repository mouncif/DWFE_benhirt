import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatIconModule,
    Material.MatCardModule,
    Material.MatFormFieldModule,
    Material.MatTableModule
  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatIconModule,
    Material.MatCardModule,
    Material.MatFormFieldModule,
    Material.MatTableModule


  ]
})
export class MaterialModule { }
