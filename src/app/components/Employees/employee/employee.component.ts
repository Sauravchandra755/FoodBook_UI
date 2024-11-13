import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { MenuComponent } from '../menu/menu.component';
import { OrderComponent } from '../order/order.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  data: any;


constructor( private employeeService:EmployeeService){}



  getEmployee(){
    this.employeeService.GetAllEmployee( ).subscribe(
      (result: any) => {
      //console.log(result);  
      this.data = result; 
      console.log(this.data)
      },
      (error) => {
        console.log(error);
        
      })
    }
}
