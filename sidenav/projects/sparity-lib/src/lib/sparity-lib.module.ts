import { NgModule } from '@angular/core';
import { SparityLibComponent } from './sparity-lib.component';
import { FormComponent } from './form/form.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { SmeterialModule } from './smeterial/smeterial.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ToastersucessComponent } from './toastersucess/toastersucess.component';
import { ToasterfailComponent } from './toasterfail/toasterfail.component'


@NgModule({
  declarations: [SparityLibComponent, FormComponent, ButtonsComponent, ToastersucessComponent, ToasterfailComponent],
  imports: [
    SmeterialModule,FormsModule,ReactiveFormsModule
  ],
  exports: [SparityLibComponent,FormComponent, ButtonsComponent,]
})
export class SparityLibModule { }
