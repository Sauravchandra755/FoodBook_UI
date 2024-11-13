import { DecimalPipe } from "@angular/common";

export class Order {
    orderId:Number;
    id:Number;
    foodId:Number;
    totalPrice:DecimalPipe;
    orderDateTime:Date;
    orderStatus:boolean;
}