import {
  Component,
  OnInit
} from '@angular/core';
import { MachineStatus } from '@libs/machine/enums/machine-status.enum';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit {

  Running = MachineStatus.Running;
  Warning = MachineStatus.Warning;
  constructor() {
  }
  ngOnInit(): void {
  }
}
