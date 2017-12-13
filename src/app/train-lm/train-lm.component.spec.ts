import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainLmComponent } from './train-lm.component';

describe('TrainLmComponent', () => {
  let component: TrainLmComponent;
  let fixture: ComponentFixture<TrainLmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainLmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainLmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
