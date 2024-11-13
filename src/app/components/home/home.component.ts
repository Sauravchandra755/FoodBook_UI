import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { Employee } from 'src/app/shared/models/Employee';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mid: any ; user: any;
  userRole: any;

  constructor( private msalService: MsalService, public employeeService: EmployeeService ) {}

  ngOnInit(): void {
    //console.log(this.msalService.instance.getActiveAccount()?.username?.slice(1,8),"mid")
    this.employeeService.loadCurrentUser();
    console.log(this.employeeService.currentUser.value.role,'home')
  }

  isLoggedIn() : boolean{    
    return this.msalService.instance.getActiveAccount() != null
  }

   getName(): string | undefined{
    return this.msalService.instance.getActiveAccount()?.name;    
  }

  // getUserId(): string | undefined{
  //   this.mid = this.msalService.instance.getActiveAccount()?.username?.slice(1,8);
  //   //console.log(this.mid)
  //   return this.mid;
  // }

  // getRole(mid: number): string{
  //   //this.getUserId()
  //   //console.log(this.mid)
  //    this.employeeService.GetEmployeeByMid(this.mid).subscribe(
  //     (response: any) => {
  //       this.user = response
  //       //console.log(response)
  //     })
  //   this.userRole = this.user.role.toLowerCase();
  //   //console.log(this.userRole,this.user.role)
  //   return this.userRole;
  // }
}
