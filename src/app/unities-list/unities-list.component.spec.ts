import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitiesListComponent } from './unities-list.component';

describe('UnitiesListComponent', () => {
  let component: UnitiesListComponent;
  let fixture: ComponentFixture<UnitiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
