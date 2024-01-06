import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.scss']
})
export class TrackOrderComponent {
  @Input() ordersList: Array<any> = []
  @Input() billingEmails: Array<any> = []

  form = new FormGroup({
    order: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  get orderControl() {
    return this.form.get('order') as FormControl;
  }

  get emailControl() {
    return this.form.get('email') as FormControl;
  }

  sendData() {
    console.log(this.form.value)
    this.form.reset()
  }
}
