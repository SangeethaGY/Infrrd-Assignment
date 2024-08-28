import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EmployeeService } from '../../../service/employee.service';
import { AppConstants } from 'src/app/configs/constants';
@Component({
  selector: 'app-employee-card',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent {
  @Input() employeeDetails : any = [];
  public employeeToDelete : string = '';
  public messages : any = AppConstants.EMPLOYEE_CARD_MESSAGES;

  constructor(private employeeService: EmployeeService){}

  public openDeleteModel(name:string) {
    this.employeeToDelete = name;
    console.log("To delete: ",this.employeeToDelete)
  }

  public confirmEmployeeDelete(){
    this.employeeToDelete? this.employeeService.deleteEmployee(this.employeeToDelete):'';
  }
}
