import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FoodRequest } from 'src/app/shared/models/FoodRequest';
import { FoodService } from 'src/app/shared/services/food.service';

@Component({
  selector: 'app-add-food-item',
  templateUrl: './add-food-item.component.html',
  styleUrls: ['./add-food-item.component.css']
})
export class AddFoodItemComponent {
  id: FoodRequest;


constructor(private foodService: FoodService, public router: Router){}



food : FoodRequest={
  foodName: '',
  foodDescription: '',
  foodCatagory: '',
  image: HTMLInputElement,
  price: 0,
  stock: 0
};

  ngOnInit(): void {
  }
  
  onSubmit(): void{
    console.log(this.food)
    this.foodService.PostFood(this.food).subscribe(
      response => {
        
        alert('Added Sucessfully')
        this.router.navigateByUrl('allitem')
      }
    );
  }

}
