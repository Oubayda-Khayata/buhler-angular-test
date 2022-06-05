import { Component, OnInit } from '@angular/core';
import { IRootFacade } from '../../facades/root.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  currentDate$ = this.rootFacade.CurrentDate$;

  constructor(
    private rootFacade: IRootFacade,
  ) {}

  ngOnInit(): void {

  }
}
