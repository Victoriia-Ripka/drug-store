import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent {
  accountForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    nicName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl(''),
    newPassword: new FormControl(''),
  });

  get nameControl() {
    return this.accountForm.get('name') as FormControl;
  }

  get nicNameControl() {
    return this.accountForm.get('nicName') as FormControl;
  }

  get lastNameControl() {
    return this.accountForm.get('lastName') as FormControl;
  }

  get emailControl() {
    return this.accountForm.get('email') as FormControl;
  }

  get passwordControl() {
    return this.accountForm.get('password') as FormControl;
  }

  get newPasswordControl() {
    return this.accountForm.get('newPassword') as FormControl;
  }

  sendData() {
    console.log(this.accountForm.value)
    this.accountForm.reset()
  }
}

