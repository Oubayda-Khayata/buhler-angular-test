import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineLineComponent } from './machine-line.component';

describe('MachineLineComponent', () => {
  let component: MachineLineComponent;
  let fixture: ComponentFixture<MachineLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
