import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotCreationComponent } from './robot-creation.component';

describe('RobotCreationComponent', () => {
  let component: RobotCreationComponent;
  let fixture: ComponentFixture<RobotCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
