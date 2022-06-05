import { Component, Input, OnInit } from '@angular/core';
import { MachineStatus } from '@libs/machine/enums/machine-status.enum';
import { IPackerFacade } from '../../facades/packer.facade';

@Component({
  selector: 'app-packer',
  templateUrl: './packer.component.html',
  styleUrls: ['./packer.component.scss'],
})
export class PackerComponent implements OnInit {

  @Input() initialStatus: MachineStatus = MachineStatus.Unknown;
  @Input() hideMachineIcon = false;
  status$ = this.packerFacade.Status$;
  icon = 'call_to_action';
  name = 'Packer';
  Unknown = MachineStatus.Unknown;

  constructor(
    private packerFacade: IPackerFacade,
  ) {}

  ngOnInit(): void {
    this.packerFacade.SetStatus(this.initialStatus);
  }
}
