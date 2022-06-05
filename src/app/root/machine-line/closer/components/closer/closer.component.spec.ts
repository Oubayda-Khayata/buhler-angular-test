import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloserComponent } from './closer.component';

describe('CloserComponent', () => {
  let component: CloserComponent;
  let fixture: ComponentFixture<CloserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
