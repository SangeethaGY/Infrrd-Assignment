import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCardComponent } from './employee-card.component';

describe('EmployeeCardComponent', () => {
  let component: EmployeeCardComponent;
  let fixture: ComponentFixture<EmployeeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EmployeeCardComponent],
    });
    fixture = TestBed.createComponent(EmployeeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set employeeToDelete on call of openDeleteModel',() => {
    const name = 'sam';
    component.openDeleteModel(name);
    expect(component.employeeToDelete).toEqual(name)
  })

  it('should call employeeService deleteEmployee method if employeeToDelete is present',() => {
    const name = 'sam';
    const spy = spyOn(component['employeeService'],'deleteEmployee')
    component.employeeToDelete = name;
    component.confirmEmployeeDelete();
    expect(spy).toHaveBeenCalledWith(name)
  })

  it('should not call employeeService deleteEmployee method if employeeToDelete is present',() => {
    const name = '';
    const spy = spyOn(component['employeeService'],'deleteEmployee')
    component.employeeToDelete = name;
    const res = component.confirmEmployeeDelete();
    expect(res).toBeFalsy();
  })
  
});
