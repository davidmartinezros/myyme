import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityCreationComponent } from './unity-creation.component';

describe('UnityCreationComponent', () => {
  let component: UnityCreationComponent;
  let fixture: ComponentFixture<UnityCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnityCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnityCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
