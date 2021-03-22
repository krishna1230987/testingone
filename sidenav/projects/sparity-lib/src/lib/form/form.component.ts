import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userForm:FormGroup;
  constructor(private fb:FormBuilder){

  }
  ngOnInit(){
    this.userForm = this.fb.group({
      'username':[null,[Validators.required]],
      'email':  [null,[Validators.required, Validators.email]],
      'password':[null,[Validators.required]]
    });
  }

  onFormSubmit(){
    console.log("user Data",this.userForm.value)
  }
}
