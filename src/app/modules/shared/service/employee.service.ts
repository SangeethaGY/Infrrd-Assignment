import { Injectable, WritableSignal, signal } from '@angular/core';
import { EmployeeDetails } from '../models/employee-details.model';

const data =     [
  {
      "name":"Andrew Bridgen",
      "companyName":"ABC Company",
      "emailId":"andrew@test.com",
      "contactNo":"7668990922",
      "designation":"Software Developer",
      "avatar":"assets/images/avatar-3.avif"
  },
  {
      "name":"Sam Bridgen",
      "companyName":"ABC Company",
      "emailId":"sam@test.com",
      "contactNo":"7668990920",
      "designation":"Senior Software Developer",
      "avatar":"assets/images/avatar-4.avif"
  },
  {
      "name":"Martin",
      "companyName":"ABCD Company",
      "emailId":"martin@test.com",
      "contactNo":"7668990921",
      "designation":"Quality Assurance",
      "avatar":"assets/images/avatar-3.avif"
  },
  {
      "name":"Sofia",
      "companyName":"XYZ Company",
      "emailId":"sofia@test.com",
      "contactNo":"7668990912",
      "designation":"Technical Lead",
      "avatar":"assets/images/avatar-1.avif"
  }
]

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public  empData: WritableSignal<EmployeeDetails[]> = signal(data);

  public showForm:WritableSignal<boolean> = signal(false);
  public employeeDataLocal:EmployeeDetails[] = data;

  constructor() {}

  public fetchEmployeeDetails(){
    this.empData.set(data)
    this.employeeDataLocal = JSON.parse(JSON.stringify(this.empData()))
    return this.empData;
    
  }

  public filterEmployee(designation:string){
    const empData = this.empData();
    this.employeeDataLocal = JSON.parse(JSON.stringify(empData))
    const filteredList = empData.filter((val:EmployeeDetails|any)=>{
      if(val.designation === designation) return val;
    })
    this.empData.set(filteredList);
  }


  public searchEmployee(name:string) {
    const empData = this.empData()
    this.employeeDataLocal = JSON.parse(JSON.stringify(empData));
    const employee = empData.filter((val:EmployeeDetails|any) => {
      if(val.name.toLowerCase().includes(name.toLowerCase())) {
        return val;
      }
    })
    this.empData.set(employee)
  }

  public addEmployee(emp:EmployeeDetails[]) {
    const empData = [...this.empData(),...emp];
    this.employeeDataLocal = JSON.parse(JSON.stringify(empData))
    this.empData.set(empData)
  }

  public deleteEmployee(name:string) {
    const empData = this.employeeDataLocal ? this.employeeDataLocal : this.empData();
    const employee = empData.filter((emp:EmployeeDetails|any) => emp.name.toLowerCase() !== name.toLowerCase());
    this.employeeDataLocal = JSON.parse(JSON.stringify(employee))
    this.empData.set(employee)
  }

  public viewDetails() {
    this.empData.set(this.employeeDataLocal);
  }
}
