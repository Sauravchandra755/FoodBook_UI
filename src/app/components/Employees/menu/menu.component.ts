import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { Food } from 'src/app/shared/models/Food';
import { SendOrderRequest } from 'src/app/shared/models/SendOrderRequest';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { FoodService } from 'src/app/shared/services/food.service';
import { OrderService } from 'src/app/shared/services/order.service';

declare var window: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
food: Food[] = []; isorder: boolean = false;
inputnumber : number = 0; formModal:any; image: any;
  mid: any;
  user: any;
  userId: any;
  foodId: number;
  //sendorder : SendOrderRequest
  

constructor( private menuservice:FoodService, private orderservice: OrderService, private msalService: MsalService, private employeeService: EmployeeService ){}

ngOnInit(): void{
  this.menuservice.GetFood().subscribe(
    (result: any) => {
    this.food = result; 
    // this.food.forEach(element => {
    //   element.image =  "data:image/svg+xml;base64," + element.image;
    // });
    console.log(this.food)
    },
    (error) => {
      console.log(error);
      
    })

    this.formModal = new window.bootstrap.Modal(
      document.getElementById("setquantity")
    )
  }  

  plus()
  {
   this.inputnumber = this.inputnumber+1;
  }

  minus()
  {
    if(this.inputnumber != 0)
    {
      this.inputnumber = this.inputnumber-1;
    }
  }

  order(){
    this.isorder = true;
  }

  openModal(fId: number){
    this.foodId = fId
    this.formModal.show();
  }

  // sendorder : SendOrderRequest ={
  //   employeeId: 0,
  //   foodId: 0,
  //   quantity: 0
  // } 

  placeOrder(){
    //get emp id and food id 
    //this.getUserId();
    var sendorder : SendOrderRequest ={
      employeeId: this.employeeService.currentUser.value.id,
      foodId: this.foodId,
      quantity: this.inputnumber
    }
    //create obj of order type 
    this.orderservice.PostOrders(this.employeeService.currentUser.value.id, this.foodId,this.inputnumber).subscribe(
      response => {        
        alert('Order Placed Sucessfully')
        //this.router.navigateByUrl('/allemployee')
      }
    );;
  }

}




