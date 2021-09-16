import { Component, OnInit } from '@angular/core';
import { throwIfEmpty } from 'rxjs/operators';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userActivated = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.activatedEmitter.subscribe( (didActivate) => {
        this.userActivated = didActivate;
    });
  }
}
