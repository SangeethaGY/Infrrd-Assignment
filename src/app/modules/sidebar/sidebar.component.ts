import { Component } from '@angular/core';
import { AppConstants } from 'src/app/configs/constants';
import { EmployeeService } from '../shared/service/employee.service';
import { FormService } from '../shared/service/form.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public readonly sideBarContent = AppConstants.SIDEBAR_SECTION_CONTENT;
  constructor(
    private employeeService:EmployeeService,
    private formService:FormService
    ){}

  public filterEmployee() {
    this.employeeService.viewDetails();
    this.formService.formConditions.set({
      "showForm" : true,
      "isFilter" : true,
      "isSearch" : false,
      "isAdd":false
    })
  }

  public searchEmployee() {
    this.employeeService.viewDetails();
    this.formService.formConditions.set({
      "showForm" : true,
      "isFilter" : false,
      "isSearch" : true,
      "isAdd":false
    })
  }

  public addEmployee() {
    this.employeeService.viewDetails();
    this.formService.formConditions.set({
      "showForm" : true,
      "isFilter" : false,
      "isSearch" : false,
      "isAdd":true
    })
  }

  public viewEmployee() {
    this.employeeService.viewDetails();
    this.formService.formConditions.set({
      "showForm" : false,
      "isFilter" : false,
      "isSearch" : false,
      "isAdd":false
    })
  }

}
