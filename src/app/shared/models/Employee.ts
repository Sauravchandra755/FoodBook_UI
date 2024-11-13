import { DecimalPipe } from "@angular/common";

export class Employee {

id:number;
mId:number;
employeeName:string;
dailyCredits:DecimalPipe;
updatedCreditsDate:Date;
email:string;
role:string;
isActive:boolean;

}