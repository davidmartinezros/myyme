import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityGetComponent } from './unity-get.component';

describe('UnityGetComponent', () => {
  let component: UnityGetComponent;
  let fixture: ComponentFixture<UnityGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnityGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnityGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
