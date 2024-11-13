import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { EmployeeService } from './shared/services/employee.service';
import { Employee } from "../app/shared/models/Employee";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FoodBook_UI';
  mid: any ; user: Employee;
  userRole: any;

  constructor( private msalService: MsalService, private employeeService: EmployeeService ) {}

  isLoggedIn() : boolean{
    return this.msalService.instance.getActiveAccount() != null
  }

  login(){
    this.msalService.loginPopup().subscribe(
      (response: AuthenticationResult) =>{
        this.msalService.instance.setActiveAccount(response.account)
      }
    )
    
  }

  logout(){
    this.msalService.logout();
  }

  getName(): string | undefined{
    //console.log(this.msalService.instance.getActiveAccount()?.name)
    return this.msalService.instance.getActiveAccount()?.name;
  }

  getUserId(): string | undefined{
    this.mid = this.msalService.instance.getActiveAccount()?.username?.slice(1,8);
    //console.log(this.mid)
    return this.mid;
  }

  getRole(): string{
    this.getUserId()
    console.log(this.mid)
     this.employeeService.GetEmployeeByMid(this.mid).subscribe(
      (response: Employee) => 
      this.user = response
    )
    this.userRole = this.user.role;
    console.log(this.userRole,this.user.role)
    return this.userRole;
  }
}
