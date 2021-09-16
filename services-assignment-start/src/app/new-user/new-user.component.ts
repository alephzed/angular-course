import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  @ViewChild('myForm', {static: false}) myForm: NgForm;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  protected onSubmit(f: NgForm): void {
    console.log(f.controls['username'].value);
    this.userService.addUser(f.controls['username'].value);

    f.resetForm();
}

}
