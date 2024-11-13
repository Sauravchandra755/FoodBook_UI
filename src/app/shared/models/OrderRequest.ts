import { DecimalPipe } from "@angular/common";

export class OrderRequest{


    Employee:string;
    FoodId:Number;
    Food:string;
    TotalPrice:DecimalPipe;
    OrderDateTime:Date;
    OrderStatus:bigint;




}