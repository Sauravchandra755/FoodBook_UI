
import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { FoodService } from 'src/app/shared/services/food.service';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

  
export class OrderComponent implements OnInit {
  user: any;
  userRole: any;
  food: any;
  constructor( private orderService: OrderService, private foodService: FoodService, private msalService: MsalService, private employeeService: EmployeeService ){ }

  allOrders:any; mid: any;
  foodName: any;

  ngOnInit(): void {
    this.orderService.GetOrdersByEmpId(this.employeeService.currentUser.value.id).subscribe(
      (response: any) =>{
        this.allOrders = response
        console.log(this.allOrders)
      },
      err => {
        console.log(err)
      }
    )

    // this.allOrders.forEach((element: any) => {
    //   console.log(element.foodId)
    //   this.foodService.GetfoodbyId(element.foodId).subscribe(
    //     (response: any) =>{
    //       this.food = response
    //       console.log(this.food)
    //     },
    //     err => {
    //       console.log(err)
    //     }
    //   );
    // });
    
  }

  getUserId(): string | undefined{
    this.mid = this.msalService.instance.getActiveAccount()?.username?.slice(1,8);
    //console.log(this.mid)
    return this.mid;
  }

  getRole(): string{
    this.getUserId()
    //console.log(this.mid)
     this.employeeService.GetEmployeeByMid(this.mid).subscribe(
      (response: any) => {
        this.user = response
        //console.log(response)
      }
    )
    this.userRole = this.user.role.toLowerCase();
    //console.log(this.userRole,this.user.role)
    return this.userRole;
  }

}


