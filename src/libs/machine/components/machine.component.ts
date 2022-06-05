import { MachineStatus } from './../enums/machine-status.enum';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss'],
})
export class MachineComponent implements OnInit {

  @Input() status: MachineStatus = MachineStatus.Unknown;
  @Input() icon: string = '';
  @Input() name: string = '';
  @Input() hideMachineIcon = false;
  Alarm = MachineStatus.Alarm;
  Warning = MachineStatus.Warning;

  constructor() {}

  get statusIcon(): string {
    switch (this.status) {
      case MachineStatus.Alarm:
        return 'info';
      case MachineStatus.Warning:
        return 'warning';
      case MachineStatus.Running:
        return 'settings_backup_restore';
    }
    return 'help';
  }

  get statusColor(): string {
    switch (this.status) {
      case MachineStatus.Alarm:
        return 'red';
      case MachineStatus.Warning:
        return 'orange';
    }
    return 'lightgrey';
  }

  ngOnInit(): void {
  }
}
