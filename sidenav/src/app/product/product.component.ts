import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../shared/dialog/dialog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private matdilaog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    let dilogRef = this.matdilaog.open(DialogComponent,{
      width: '200px',
      height:'200px',
      data: {name: 'krishna' }
    });
    dilogRef.afterClosed().subscribe(
      result =>{
        console.log(`result is ${result}`)
      }
    )
  }

}
