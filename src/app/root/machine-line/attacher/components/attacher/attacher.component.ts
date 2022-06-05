import { Component, Input, OnInit } from '@angular/core';
import { MachineStatus } from '@libs/machine/enums/machine-status.enum';
import { IAttacherFacade } from '../../facades/attacher.facade';

@Component({
  selector: 'app-attacher',
  templateUrl: './attacher.component.html',
  styleUrls: ['./attacher.component.scss'],
})
export class AttacherComponent implements OnInit {

  @Input() initialStatus: MachineStatus = MachineStatus.Unknown;
  @Input() hideMachineIcon = false;
  status$ = this.attacherFacade.Status$;
  icon = 'chrome_reader_mode';
  name = 'Attacher';
  Unknown = MachineStatus.Unknown;

  constructor(
    private attacherFacade: IAttacherFacade,
  ) {}

  ngOnInit(): void {
    this.attacherFacade.SetStatus(this.initialStatus);
  }
}
