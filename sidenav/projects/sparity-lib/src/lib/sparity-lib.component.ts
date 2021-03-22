import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'lib-sparity-lib',
  template: `
    <p>
      sparity-lib works!
    </p>
    
  `,
  styles: [
  ]
})
export class SparityLibComponent implements OnInit {

  constructor() { }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  ngOnInit(): void {
  }

}
