import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Signal} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../../service/form.service';
import { AppConstants } from 'src/app/configs/constants';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../../../service/employee.service';
import { FormConditions } from '../../../models/form-conditions.model';
import { EmployeeDetails } from '../../../models/employee-details.model';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {
  form!:FormGroup;
  formLabel = AppConstants.FORM_LABEL;
  designationList = AppConstants.DESIGNATION;
  avatarList = AppConstants.AVATAR;
  errorMessage = AppConstants.FORM_ERROR;
  formCondition!:Signal<FormConditions>;
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  phoneNumberPattern = '^[0-9]{10}$';
  formConditionObj : FormConditions = {
    "showForm" : false,
    "isFilter" : false,
    "isSearch" : false,
    "isAdd":false
  }
  constructor(
    private fb:FormBuilder,
    private formService:FormService,
    private employeeService:EmployeeService
  ){}

  ngOnInit() {
    this.form = this.fb.group({
      name:[''],
      companyName:[''],
      emailId:[''],
      contactNo:[''],
      designation:[''],
      avatar:['']
    })
    this.formCondition = this.formService.formConditions;
  }

  ngDoCheck(){
    this.updateFormValidators();
  }

  public updateFormValidators() {
    Object.keys(this.form.controls).forEach(control => {
      this.form.controls[control].setValidators(null);
      this.form.controls[control].updateValueAndValidity();
    });
    const formConditions = this.formService.formConditions();
    if(formConditions.isFilter) {
      this.form.controls['designation'].setValidators([Validators.required]);
    } else if(formConditions.isSearch) {
      this.form.controls['name'].setValidators([Validators.required])
    } else {
      Object.keys(this.form.controls).forEach(control => {
        this.form.controls[control].setValidators([Validators.required]);
      });
      this.form.controls['emailId'].setValidators([Validators.required,Validators.pattern(this.emailPattern)]);
      this.form.controls['contactNo'].setValidators([Validators.required,Validators.pattern(this.phoneNumberPattern)])
    }

    Object.keys(this.form.controls).forEach(control => {
      this.form.controls[control].updateValueAndValidity();
    });
  }

  public formSubmit() {
    if(this.formCondition().isFilter) {
      const designation = this.form.controls['designation'].value;
      this.formService.formConditions.set(this.formConditionObj);
      this.employeeService.filterEmployee(designation);
    } else if (this.formCondition().isSearch) {
      const name = this.form.controls['name'].value;
      this.formService.formConditions.set(this.formConditionObj);
      this.employeeService.searchEmployee(name);
    } else if (this.formCondition().isAdd) {
      this.formService.formConditions.set(this.formConditionObj);
      this.employeeService.addEmployee([this.form.value]);
    }
  }

}
