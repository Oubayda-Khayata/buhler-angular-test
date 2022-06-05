import { MachineStatus } from './../../../../../libs/machine/enums/machine-status.enum';
import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { IMachineLineFacade } from '../../facades/machine-line.facade';

@Component({
  selector: 'app-machine-line',
  templateUrl: './machine-line.component.html',
  styleUrls: ['./machine-line.component.scss'],
})
export class MachineLineComponent implements OnInit {
  @Input() hideMachineIcon = false;
  @Input() showLines = true;

  Unknown = MachineStatus.Unknown;
  scaleStatus$ = this.machineLineFacade.ScaleStatus$;
  attacherStatus$ = this.machineLineFacade.AttacherStatus$;
  packerStatus$ = this.machineLineFacade.PackerStatus$;
  closerStatus$ = this.machineLineFacade.CloserStatus$;

  constructor(
    private machineLineFacade: IMachineLineFacade
  ) {
  }
  ngOnInit(): void {
    this.machineLineFacade.FetchMachineLine();
  }
}
