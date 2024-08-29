import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormComponent } from './employee-form.component';

import { Signal, signal } from '@angular/core';

describe('EmployeeFormComponent', () => {
  let component: EmployeeFormComponent;
  let fixture: ComponentFixture<EmployeeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EmployeeFormComponent]
    });
    fixture = TestBed.createComponent(EmployeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call formSubmit when formCondition is of filter',() => {
    const spy = spyOn(component['formService'].formConditions,'set')
    component.formCondition = signal({
      showForm: false,
      isFilter: true,
      isSearch: false,
      isAdd: false
    });
    component.formSubmit();
    expect(spy).toHaveBeenCalled();
  });

  it('should call formSubmit when formCondition is of search',() => {
    const spy = spyOn(component['formService'].formConditions,'set')
    component.formCondition = signal({
      showForm: false,
      isFilter: false,
      isSearch: true,
      isAdd: false
    });
    component.formSubmit();
    expect(spy).toHaveBeenCalled();
  });

  it('should call formSubmit when formCondition is of add employee ',() => {
    const spy = spyOn(component['employeeService'],'addEmployee')
    component.formCondition = signal({
      showForm: false,
      isFilter: false,
      isSearch: false,
      isAdd: true
    });
    component.formSubmit();
    expect(spy).toHaveBeenCalled();
  });
});
