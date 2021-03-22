import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';


const materialComponents = [
  MatToolbarModule,MatAutocompleteModule,MatButtonModule,MatCardModule,MatIconModule
  ,MatSidenavModule,MatListModule,MatDividerModule,MatDialogModule,
  MatFormFieldModule,MatSnackBarModule,MatInputModule,MatTableModule
]


@NgModule({
  
  imports: [materialComponents],
  exports:[materialComponents]
})
export class MaterialModule { }
