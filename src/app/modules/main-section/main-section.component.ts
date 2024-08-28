import { Component, Signal } from '@angular/core';
import { EmployeeService } from '../shared/service/employee.service';
import { FormService } from '../shared/service/form.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent {
  public empData!: Signal<any>;
  public formConditions!: Signal<any>;
  constructor(
    private employeeDataService:EmployeeService,
    private formService:FormService
    ){
    this.empData = this.employeeDataService.fetchEmployeeDetails();
    this.formConditions = this.formService.formConditions;
  }

  ngOnInit(){
   console.log("Inside main: ",this.empData)
  }
}
