import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotGetComponent } from './robot-get.component';

describe('RobotGetComponent', () => {
  let component: RobotGetComponent;
  let fixture: ComponentFixture<RobotGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
