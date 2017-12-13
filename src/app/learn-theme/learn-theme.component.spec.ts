import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnThemeComponent } from './learn-theme.component';

describe('LearnThemeComponent', () => {
  let component: LearnThemeComponent;
  let fixture: ComponentFixture<LearnThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
