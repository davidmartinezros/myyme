import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityRelationCreationComponent } from './unity-relation-creation.component';

describe('UnityRelationCreationComponent', () => {
  let component: UnityRelationCreationComponent;
  let fixture: ComponentFixture<UnityRelationCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnityRelationCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnityRelationCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
