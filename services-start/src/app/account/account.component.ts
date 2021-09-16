import { Component, EventEmitter, Input, Output } from '@angular/core';
import { throwIfEmpty } from 'rxjs/operators';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {

  }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    // console.log('A server status changed, new status: ' + status);
    this.accountsService.statusUpdated.emit(status); // can use a service to emit an event for component to component communication
  }
}
