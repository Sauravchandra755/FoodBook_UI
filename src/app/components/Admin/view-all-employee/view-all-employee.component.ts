import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-view-all-employee',
  templateUrl: './view-all-employee.component.html',
  styleUrls: ['./view-all-employee.component.css']
})
export class ViewAllEmployeeComponent {
  employee: any;
  constructor(private empservice:EmployeeService){}

  ngOnInit(): void {

    this.empservice.GetAllEmployee().subscribe(
          (result: any) => {
          //console.log(result);  
          this.employee = result; 
          console.log(this.employee)
          },
          (error) => {
            console.log(error);
            
          })

  
  }


}
