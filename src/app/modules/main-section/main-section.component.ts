import { Component, Signal } from '@angular/core';
import { EmployeeService } from '../shared/service/employee.service';
import { FormService } from '../shared/service/form.service';
import { EmployeeDetails } from '../shared/models/employee-details.model';
import { FormConditions } from '../shared/models/form-conditions.model';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent {
  public empData!: Signal<EmployeeDetails[]>;
  public formConditions!: Signal<FormConditions>;
  constructor(
    private employeeDataService:EmployeeService,
    private formService:FormService
    ){
    this.empData = this.employeeDataService.fetchEmployeeDetails();
    this.formConditions = this.formService.formConditions;
  }
}
