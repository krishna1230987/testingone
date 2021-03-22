import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';

const smaterial = [
  MatButtonModule,MatFormFieldModule,MatCardModule,MatInputModule,
  FormsModule,ReactiveFormsModule,CommonModule
]

@NgModule({
  declarations: [],
  imports: [
    smaterial
  ],
  exports:[smaterial]
})
export class SmeterialModule { }
