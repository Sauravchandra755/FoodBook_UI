import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeRequest } from 'src/app/shared/models/EmployeeRequest';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  id: any;
  updateEmp: any;

  constructor(private empservice:EmployeeService, public router: Router, public activateroute:ActivatedRoute){}

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(
      param => {
        this.id = param.get('id');
        console.log(this.id,"tt")
        if(this.id){
         
    this.empservice.GetEmployeeById(this.id).subscribe(

      (result: any)=>{
        this.updateEmp = result;
        console.log(this.updateEmp,"$$$$$$");
      }
    )
    }
  }
    );
  }

  onSubmit() : void{
    const UpdateEmpRequest : EmployeeRequest = {
      mId: this.updateEmp?.mId,
      employeeName: this.updateEmp?.employeeName,
      dailyCredits: this.updateEmp?.dailyCredits,
      email: this.updateEmp?.email,
      role: this.updateEmp?.role,
    }
    console.log(this.updateEmp,"&&&")
    this.empservice.UpdateEmployee(this.id,UpdateEmpRequest).subscribe(
      response =>{
        alert('Updated Sucessfully');
        this.router.navigateByUrl('/allemployee')
      }
    );
    }



















}
