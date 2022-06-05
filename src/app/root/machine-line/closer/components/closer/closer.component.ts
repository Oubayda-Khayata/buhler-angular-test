import { Component, Input, OnInit } from '@angular/core';
import { MachineStatus } from '@libs/machine/enums/machine-status.enum';
import { ICloserFacade } from '../../facades/closer.facade';

@Component({
  selector: 'app-closer',
  templateUrl: './closer.component.html',
  styleUrls: ['./closer.component.scss'],
})
export class CloserComponent implements OnInit {

  @Input() initialStatus: MachineStatus = MachineStatus.Unknown;
  @Input() hideMachineIcon = false;
  status$ = this.closerFacade.Status$;
  icon = 'grid_on';
  name = 'Closer';
  Unknown = MachineStatus.Unknown;

  constructor(
    private closerFacade: ICloserFacade,
  ) {}

  ngOnInit(): void {
    this.closerFacade.SetStatus(this.initialStatus);
  }
}
