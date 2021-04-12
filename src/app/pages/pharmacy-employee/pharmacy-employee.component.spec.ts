import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyEmployeeComponent } from './pharmacy-employee.component';

describe('PharmacyEmployeeComponent', () => {
  let component: PharmacyEmployeeComponent;
  let fixture: ComponentFixture<PharmacyEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
