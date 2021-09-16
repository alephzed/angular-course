import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  forbiddenProjectNames = ['Test'];


  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectData': new FormGroup({
        'projectname': new FormControl(null, [Validators.required], this.forbiddenNames),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'status': new FormControl('Stable')
      })
    });
    this.projectForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
  }

  onSubmit(): void {
    console.log(this.projectForm);
  }

  forbiddenNames(control: FormControl): Promise<any> | Observable<any> {
    return  new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'nameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }
}
