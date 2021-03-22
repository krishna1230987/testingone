import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import {HomeComponent} from './home/home.component'
import {ProductComponent} from './product/product.component'
import {SecurityComponent} from './security/security.component'

import { RouterModule, Routes } from '@angular/router';
import {SparityLibModule} from "../../projects/sparity-lib/src/lib/sparity-lib.module";
import { DialogComponent } from './shared/dialog/dialog.component';
import { TosterComponent } from './toster/toster.component';
import { Toster1Component } from './toster1/toster1.component';
import { SampleComponent } from './sample/sample.component'
import {SharedModule} from './shared/shared.module';
import {AuthService} from './service/guards/auths.service';
import {AuthGuardGuard} from './service/guards/auth-guard.guard';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { ShowproductsComponent } from './product/showproducts/showproducts.component';

const routes :Routes = [
  {path : '',component:HomeComponent},
  {path : 'product',component:ProductComponent,
  canActivate:[AuthGuardGuard],
  children:[
    {path:'productlist',component:ProductlistComponent},
    { path: 'showproducts',component:ShowproductsComponent}
  ]},
  {path : 'security',component:SecurityComponent},
  {path : 'form',component:SampleComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    SecurityComponent,
    DialogComponent,
    TosterComponent,
    Toster1Component,
    SampleComponent,
    ProductlistComponent,
    ShowproductsComponent,
  ],
   entryComponents:[DialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    SparityLibModule,
    FormsModule,
    SharedModule
  ],
 
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
