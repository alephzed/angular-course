import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  @ViewChild('form') signupForm: NgForm;

  subscriptions = ['basic', 'advanced', 'pro'];
  defaultSubscription = 'advanced';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signupForm);
    console.log('email: ' + this.signupForm.value.email);
    console.log('level: ' + this.signupForm.value.level);
    console.log('password: ' + this.signupForm.value.password);

  }
}
