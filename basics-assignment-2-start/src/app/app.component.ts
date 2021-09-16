import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = '';
  allowResetUser: boolean = false;

  onResetUser() {
    this.userName = '';
    this.allowResetUser = false;
  }

  onUpdateUserName(event: Event) {
    console.log(event);
    this.userName = (<HTMLInputElement>event.target).value;
    if (this.userName.length > 0 ) {
      this.allowResetUser = true;
    } else {
      this.allowResetUser = false;
    }
  }
}
