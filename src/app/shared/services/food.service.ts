import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../models/Food';
import { environment } from 'src/app/environment/environment';
import { FoodRequest } from '../models/FoodRequest';
import { UpdateFoodRequest } from '../models/UpdateFoodRequest';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
 

  constructor(private http: HttpClient) { }

  GetfoodbyId(id: any) {
    return this.http.get<Food>(environment.apiUrl + "api/Foods/" +id);
  }

  GetFood () : Observable <Food>{
    return this.http.get<Food>(environment.apiUrl + "api/Foods");
  }

  PostFood (foodReq:FoodRequest)  {
    // var foodName = foodReq.foodName;
    // var foodDescription = foodReq.foodDescription;
    // var foodCatagory = foodReq.foodCatagory;
    // var image = foodReq.image;
    // var price = foodReq.price;
    // var stock = foodReq.stock;

   //  const body = {foodName,foodDescription, foodCatagory,image, price,stock}
  //  const body =foodReq

    // let httpOptions ={

    //         headers: new HttpHeaders({
      
    //           'Content-Type' :'application/json'
      
    //         }),
      
    //         params:{foodName: foodReq.foodName,foodDescription: foodReq.foodDescription, foodCatagory: foodReq.foodCatagory, image: foodReq.image,price: foodReq.price,stock: foodReq.stock}
      
    //       };
      
    //       var temp= this.http.post<Food>(environment.apiUrl + "api/Foods", httpOptions.params);
    //   console.log(temp)
    //   return temp;
      
    // let data = new FormData();
    // data.append('foodName', foodReq.foodName);
    // data.append('foodDescription', foodReq.foodDescription)
    // data.append('foodCatagory', foodReq.foodCatagory)
    // data.append('image', foodReq.image)
    // data.append('price', foodReq.price)
    // data.append('stock', foodReq.stock)
    // return this.http.post<Food>(environment.apiUrl + "api/Foods",data);

    return this.http.post(environment.apiUrl + "api/Foods", foodReq);    
  }

  UpdateFood (foodReq:UpdateFoodRequest, Id:number) : Observable <Food> {
    //console.log(foodReq)
    var foodName = foodReq.foodName;
    var foodDescription = foodReq.foodDescription;
    var foodCatagory = foodReq.foodCatagory;
    var price = foodReq.price;
    var stock = foodReq.stock;
    const body = {foodName, foodDescription, foodCatagory,price,stock}
    return this.http.put<Food>(environment.apiUrl + "api/Foods/"+ Id,body);
  }

   



  DeleteFood (foodReq:FoodRequest, Id:number) : Observable <Food>
  {
      
        return this.http.delete<Food>(environment.apiUrl + "api/Foods/"+ Id);
  }}
