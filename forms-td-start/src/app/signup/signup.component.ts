import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  @ViewChild('f2') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submittedForm = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // below is not the best approach - it will overwrite fields in the form
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

  onSubmit2() {
  this.submittedForm = true;
   console.log(this.signupForm);
   this.user.username = this.signupForm.value.userData.username;
   this.user.email = this.signupForm.value.userData.email;
   this.user.secretQuestion = this.signupForm.value.secret;
   this.user.answer = this.signupForm.value.questionAnswer;
   this.user.gender = this.signupForm.value.gender;

   this.signupForm.reset();
 }
}