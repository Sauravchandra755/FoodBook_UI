import { Component } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-view-all-order',
  templateUrl: './view-all-order.component.html',
  styleUrls: ['./view-all-order.component.css']
})
export class ViewAllOrderComponent {
  orders: any;
  constructor(private orderservice:OrderService) {}

  ngOnInit(): void {

    this.orderservice.GetOrders().subscribe(
          (result: any) => { 
          this.orders = result; 
          console.log(this.orders)
          },
          (error) => {
            console.log(error);
            
          })

  
  }

}
