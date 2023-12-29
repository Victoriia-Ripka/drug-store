import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {
  openedSignUp: boolean = true
  @Input() isModalOpen: boolean = false;
  @Output() toggleModal: EventEmitter<void> = new EventEmitter<void>();


  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  signUpForm = new FormGroup({
    email: new FormControl('', Validators.required),
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required)
  })

  get loginEmailControl() {
    return this.loginForm.get('email') as FormControl;
  }

  get passwordControl() {
    return this.loginForm.get('password') as FormControl;
  }

  get signUpEmailControl() {
    return this.signUpForm.get('email') as FormControl;
  }

  get fnameControl() {
    return this.signUpForm.get('fname') as FormControl;
  }

  get lnameControl() {
    return this.signUpForm.get('lname') as FormControl;
  }

  sendData(type: string): void {
    if (type === 'sign-up') {
      console.log(this.signUpForm.value)
      this.signUpForm.reset()
    }
    else {
      console.log(this.loginForm.value)
      this.loginForm.reset()
    }
       
  }

  toogleSignUp(button: string): void {
    if (button === 'sign-up' && !this.openedSignUp) {
      this.openedSignUp = !this.openedSignUp
    } 
    if (button === 'log-in' && this.openedSignUp) {
      this.openedSignUp = !this.openedSignUp
    } 
  }

  closeModel(): void {
    this.toggleModal.emit();
  }
}
