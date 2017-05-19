import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintUnitiesComponent } from './print-unities.component';

describe('PrintUnitiesComponent', () => {
  let component: PrintUnitiesComponent;
  let fixture: ComponentFixture<PrintUnitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintUnitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintUnitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
