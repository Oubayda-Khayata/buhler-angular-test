import { Component, Input, OnInit } from '@angular/core';
import { MachineStatus } from '@libs/machine/enums/machine-status.enum';
import { IScaleFacade } from '../../facades/scale.facade';

@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.scss'],
})
export class ScaleComponent implements OnInit {

  @Input() initialStatus: MachineStatus = MachineStatus.Unknown;
  @Input() hideMachineIcon = false;
  status$ = this.scaleFacade.Status$;
  icon = 'system_update_alt';
  name = 'Scale';
  Unknown = MachineStatus.Unknown;

  constructor(
    private scaleFacade: IScaleFacade,
  ) {}

  ngOnInit(): void {
    this.scaleFacade.SetStatus(this.initialStatus);
  }
}
