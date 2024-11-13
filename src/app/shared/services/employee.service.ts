import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from '../models/Employee';
import { environment } from 'src/app/environment/environment';
import { EmployeeRequest } from '../models/EmployeeRequest';
import { CurrentUser } from '../models/currentUser';
import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public currentUser: BehaviorSubject<any>= new BehaviorSubject(null);
  public user: any;

  constructor(private http: HttpClient, private msalService: MsalService) { }

  GetEmployeeById(id: any)
  {
      
      return this.http.get<Employee>(environment.apiUrl + "api/Employees/"+id);
  }

  GetEmployeeByMid(mid: any){
    return this.http.get<Employee>(environment.apiUrl + "api/Employees/GetUserByMid/" + mid);
  }

  GetAllEmployee () : Observable <Employee>
  {
      return this.http.get<Employee>(environment.apiUrl + "api/Employees");
  }
  
  PostEmployee (empreq:EmployeeRequest) : Observable <Employee> {
    return this.http.post<Employee>(environment.apiUrl + "api/Employees",empreq);
  }

  UpdateEmployee (Id:number,empreq:EmployeeRequest) : Observable <Employee>
  {
    console.log(Id, empreq)
    var mId = empreq.mId;
    var employeeName = empreq.employeeName;
    var dailyCredits = empreq.dailyCredits;
    var email = empreq.email;
    var role = empreq.role;

    const body = {mId, employeeName, dailyCredits, email, role}
            
    return this.http.put<Employee>(environment.apiUrl  + "api/Employees/" +Id, body);
      
    //return this.http.put<Employee>(environment.apiUrl + "api/Employees/" + Id ,empreq);
  }

  DeleteEmployee (Id:number) : Observable <Employee>
  {
      return this.http.delete<Employee>(environment.apiUrl + "api/Employees/" + Id);
  }

  loadCurrentUser(){
    var tempmid = this.msalService.instance.getActiveAccount()?.username?.slice(1,8);
    //console.log(mid)
    this.GetEmployeeByMid(tempmid).subscribe(
      (response: any) => {
        this.user = response

        const data = response ? {
          id: response.empId,
          mid: response.mId,
          employeeName: response.employeeName,
          dailyCredits: response.dailyCredits,
          updatedCreditsDate:response.updatedCreditsDate,
          email: response.email,
          role:response.role,
          isActive:response.isActive
        }: null;
        this.currentUser.next(data);
        //console.log(this.currentUser, 'res')
      })
      //this.currentUser.role = this.user.role.toLowerCase();
    //console.log(this.user)
    //console.log(this.user,'load')
    //return this.user;
  }
}
