import { Component } from '@angular/core';
import {
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { contactUsMessage } from 'src/app/types/type';

@Component({
  selector: 'contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  get nameControl() {
    return this.contactForm.get('name') as FormControl;
  }

  get emailControl() {
    return this.contactForm.get('email') as FormControl;
  }

  get subjectControl() {
    return this.contactForm.get('subject') as FormControl;
  }

  get messageControl() {
    return this.contactForm.get('message') as FormControl;
  }

  sendData() {
    console.log(this.contactForm.value)
    this.contactForm.reset()
  }
}
