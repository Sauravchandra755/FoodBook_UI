import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodRequest } from 'src/app/shared/models/FoodRequest';
import { UpdateFoodRequest } from 'src/app/shared/models/UpdateFoodRequest';
import { FoodService } from 'src/app/shared/services/food.service';

@Component({
  selector: 'app-edit-food-item',
  templateUrl: './edit-food-item.component.html',
  styleUrls: ['./edit-food-item.component.css']
})
export class EditFoodItemComponent implements OnInit {
  updateitem: any;
  foodId: number;  id: any;

  constructor(private foodservice:FoodService, public router: Router, public activateroute:ActivatedRoute){}

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(
      param => {
        this.id = param.get('id');
        console.log(this.id)
        if(this.id){
    this.foodservice.GetfoodbyId(this.id).subscribe(
      (result: any)=>{
        this.updateitem = result;
        //console.log(this.updateitem);
      }
    )
    }
  }
    );
  }

  onSubmit() : void{
      const updateitemRequest : UpdateFoodRequest = {
        foodName : this.updateitem?.foodName,
        foodDescription :this.updateitem?.foodDescription,
        foodCatagory:this.updateitem?.foodCatagory,
        price : this.updateitem?.price,
        stock: this.updateitem?.stock,
  
      }
      //console.log(this.updateitem?.Id)

      this.foodservice.UpdateFood(this.id,updateitemRequest).subscribe(
        response =>{
          alert('Updated Sucessfully');
          this.router.navigateByUrl('allitem')
        }
      );
 
  }


}
