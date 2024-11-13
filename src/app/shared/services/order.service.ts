import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/Order';
import { environment } from 'src/app/environment/environment';
import { OrderRequest } from '../models/OrderRequest';
import { SendOrderRequest } from '../models/SendOrderRequest';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { } 

  GetOrdersById (id:any) : Observable <Order>
  {
      
        return this.http.get<Order>(environment.apiUrl + "api/Orders"+ id);
  }


  GetOrders () : Observable <Order>
  {
      return this.http.get<Order>(environment.apiUrl + "api/Orders");
  }

  GetOrdersByEmpId(id :number){
      return this.http.get<Order>(environment.apiUrl + "api/Orders/" + id);
  }

  PostOrders (empId: any, foodId: any, quantity: any) : Observable <Order>
  {
    //console.log(orderReq)
    const body = {empId,foodId,quantity}
    return this.http.post<Order>(environment.apiUrl + "api/Orders",body);
  }

  UpdateOrders (orderReq:OrderRequest,Id:number) : Observable <Order>
  {
      return this.http.put<Order>(environment.apiUrl + "api/Orders/" + Id, orderReq);
  }

  DeleteOrders (orderReq:OrderRequest,Id:number) : Observable <Order>
  {
      return this.http.delete<Order>(environment.apiUrl + "api/Orders/" + Id);
  }
}
