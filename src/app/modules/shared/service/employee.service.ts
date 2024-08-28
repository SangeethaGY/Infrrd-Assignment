import { Injectable, WritableSignal, signal } from '@angular/core';

// Define the type for an employee
interface Employee {
  name: string;
  companyName: string;
  emailId: string;
  contactNo: string;
  designation: string;
  avatar: string;
}

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
  public  empData: WritableSignal<any> = signal(
    data
  );

  public showForm:WritableSignal<boolean> = signal(false);
  public employeeDataLocal:any = data;

  constructor() { 
    // this.empData.set(employeeData)
  }

  public fetchEmployeeDetails(){
    this.empData.set(data)
    return this.empData;
    
  }

  public filterEmployee(designation:string){
    const empData = this.empData()
    this.employeeDataLocal = JSON.parse(JSON.stringify(empData))
    const filteredList = empData.filter((val:any)=>{
      if(val.designation === designation) return val;
    })
    this.empData.set(filteredList);
  }


  public searchEmployee(name:string) {
    const empData = this.empData()
    this.employeeDataLocal = JSON.parse(JSON.stringify(empData));
    const employee = empData.filter((val:any) => {
      if(val.name.toLowerCase().includes(name.toLowerCase())) {
        return val;
      }
    })
    this.empData.set(employee)
  }

  public addEmployee(emp:any) {
    const empData = [...this.empData(),...emp];
    this.employeeDataLocal = JSON.parse(JSON.stringify(empData))
    this.empData.set(empData)
  }

  public deleteEmployee(name:string) {
    const empData = this.empData();
    const employee = empData.filter((emp:any) => emp.name.toLowerCase() !== name.toLowerCase());
    this.employeeDataLocal = JSON.parse(JSON.stringify(employee))
    this.empData.set(employee)
  }

  public viewDetails() {
    this.empData.set(this.employeeDataLocal);
  }
}
