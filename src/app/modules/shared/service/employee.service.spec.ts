import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add employeeDetails',() => {
    const spy = spyOn(service.empData,'set');
    const emp = [{
      "name":"Andrew Bridgen",
      "companyName":"ABC Company",
      "emailId":"andrew@test.com",
      "contactNo":"7668990922",
      "designation":"Software Developer",
      "avatar":"assets/images/avatar-3.avif"
    }];
    service.addEmployee(emp);
    expect(spy).toHaveBeenCalled();
  });

  it('should add employeeDetails',() => {
    const spy = spyOn(service.empData,'set');
    service.deleteEmployee('sam')
    expect(spy).toHaveBeenCalled();
  })
});
