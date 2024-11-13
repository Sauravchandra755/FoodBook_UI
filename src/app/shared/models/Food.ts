import { DecimalPipe } from "@angular/common";

export class Food {

    foodId:number;
    foodName:string;
    foodDescription:string;
    foodCatagory:string;
    image:any;
    price:DecimalPipe;
    stock:number;

    
}