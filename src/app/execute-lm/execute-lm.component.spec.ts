import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteLmComponent } from './execute-lm.component';

describe('ExecuteLmComponent', () => {
  let component: ExecuteLmComponent;
  let fixture: ComponentFixture<ExecuteLmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecuteLmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteLmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
