import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToasterfailComponent } from '../toasterfail/toasterfail.component';
import { ToastersucessComponent } from '../toastersucess/toastersucess.component';

@Component({
  selector: 'lib-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @ViewChild('inputRef') inputValue: ElementRef;
  selectedFlie ;
  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) { 
    
  }

  ngOnInit(): void {
  }

  onFileSelected(event){
   
     this.selectedFlie = event.target.files[0];
    
  }

  uploadFile(){

    
    let fileName = this.selectedFlie ? this.selectedFlie.name : '';
    
    const nameis = fileName.substring(fileName.lastIndexOf('.')+1);
    
    if(nameis.toLowerCase() === 'jpg' || nameis.toLowerCase() === 'png'){
      this.inputValue.nativeElement.value = '';
      this._snackBar.openFromComponent(ToastersucessComponent, {
        duration: this.durationInSeconds * 1000,
        
      });
      
      return true
    }

   else
   this.inputValue.nativeElement.value = '';
   this._snackBar.openFromComponent(ToasterfailComponent, {
    duration: this.durationInSeconds * 1000,
  });
   
  }
  
}
