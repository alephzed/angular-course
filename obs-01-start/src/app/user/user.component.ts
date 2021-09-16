import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  id: number;
  private activatedSub: Subscription;

  constructor(private route: ActivatedRoute, private userServce: UserService) {
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }

  ngOnInit() {
    this.activatedSub = this.route.params.subscribe((params: Params) => {
      this.id = +params.id; // we don't need to unsubscribe here because this subscription is controlled by angular
    });
  }

  onActivate() {
    // this.userServce.activatedEmitter.emit(true); // old approach for emitting observables
    this.userServce.activatedEmitter.next(true); // better approach is to use a subject and call next when communicating across services

  }
}
