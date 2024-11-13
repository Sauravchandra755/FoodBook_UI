import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeRequest } from 'src/app/shared/models/EmployeeRequest';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  constructor(private empservice:EmployeeService, public router: Router){}

employee:EmployeeRequest={
  mId: 0,
  employeeName: '',
  dailyCredits:0.00,
  email: '',
  role: ''
}

  onSubmit(): void{
    console.log(this.employee)
    this.empservice.PostEmployee(this.employee).subscribe(
      response => {
        
        alert('Added Sucessfully')
        this.router.navigateByUrl('/allemployee')
      }
    );
  }

}
