import { Component, OnInit } from '@angular/core';
import { FoodRequest } from 'src/app/shared/models/FoodRequest';
import { FoodService } from 'src/app/shared/services/food.service';

@Component({
  selector: 'app-view-all-food-item',
  templateUrl: './view-all-food-item.component.html',
  styleUrls: ['./view-all-food-item.component.css']
})
export class ViewAllFoodItemComponent implements OnInit {
  
 
  foodId: number;

  constructor ( private foodService : FoodService ) {}

  allItems: any;

  ngOnInit(): void {
    this.foodService.GetFood().subscribe(
      (result: any)=>{
        this.allItems = result;
        console.log(this.allItems);
      }
    )

  }
  



}

