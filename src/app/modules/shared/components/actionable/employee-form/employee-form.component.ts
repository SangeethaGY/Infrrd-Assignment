import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Signal, computed } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../../service/form.service';
import { AppConstants } from 'src/app/configs/constants';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../../../service/employee.service';

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
  formCondition!:Signal<any>;
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  phoneNumberPattern = '^[0-9]{10}$'; 
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
      avatarImage:['']
    })
    this.formCondition = this.formService.formConditions;
    computed(() => {
      const formConditions = this.formService.formConditions();
      this.updateFormValidators();
    })
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
      this.formService.formConditions.set({
        "showForm" : false,
        "isFilter" : false,
        "isSearch" : false,
        "isAdd":false
      });
      this.employeeService.filterEmployee(designation);
    } else if (this.formCondition().isSearch) {
      const name = this.form.controls['name'].value;
      this.formService.formConditions.set({
        "showForm" : false,
        "isFilter" : false,
        "isSearch" : false,
        "isAdd":false
      });
      this.employeeService.searchEmployee(name);
    } else if (this.formCondition().isAdd) {
      this.formService.formConditions.set({
        "showForm" : false,
        "isFilter" : false,
        "isSearch" : false,
        "isAdd":false
      });
      const employeeObject = this.createEmployeeObject(this.form.value);
      this.employeeService.addEmployee([employeeObject]);
    }
  }

  public createEmployeeObject(formValue:any) {
    const employeeObject = {
      "name":formValue.name,
      "companyName":formValue.companyName,
      "emailId":formValue.emailId,
      "contactNo":formValue.contactNo,
      "designation":formValue.designation,
      "avatar":formValue.avatarImage
    }
    return employeeObject;
  }

}
