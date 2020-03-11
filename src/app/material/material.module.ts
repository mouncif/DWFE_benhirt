import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatIconModule,
    Material.MatCardModule,
    Material.MatFormFieldModule,
    Material.MatTableModule,
    Material.MatGridListModule,
    Material.MatInputModule,
    Material.MatDialogModule

  ],
  exports: [
   
    Material.MatToolbarModule,
    Material.MatIconModule,
    Material.MatCardModule,
    Material.MatFormFieldModule,
    Material.MatTableModule,
    Material.MatGridListModule,
    Material.MatInputModule,
    Material.MatDialogModule

]
})
export class MaterialModule { }
