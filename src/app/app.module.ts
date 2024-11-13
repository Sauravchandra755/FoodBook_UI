import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MSAL_INSTANCE, MsalGuard, MsalInterceptor, MsalModule, MsalRedirectComponent, MsalService} from '@azure/msal-angular';
import { IPublicClientApplication, InteractionType, LogLevel, PublicClientApplication } from '@azure/msal-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './components/Employees/employee/employee.component';
import { MenuComponent } from './components/Employees/menu/menu.component';
import { OrderComponent } from './components/Employees/order/order.component';
import { VendorHomeComponent } from './components/Vendor/vendor-home/vendor-home.component';
import { FormsModule } from '@angular/forms';
import { ViewAllFoodItemComponent } from './components/Vendor/view-all-food-item/view-all-food-item.component';
import { ViewAllOrderComponent } from './components/Vendor/view-all-order/view-all-order.component';
import { EditFoodItemComponent } from './components/Vendor/edit-food-item/edit-food-item.component';
import { AddFoodItemComponent } from './components/Vendor/add-food-item/add-food-item.component';
import { AddEmployeeComponent } from './components/Admin/add-employee/add-employee.component';
import { ViewAllEmployeeComponent } from './components/Admin/view-all-employee/view-all-employee.component';
import { AdminHomeComponent } from './components/Admin/admin-home/admin-home.component';
import { EditEmployeeComponent } from './components/Admin/edit-employee/edit-employee.component';
import { HomeComponent } from './components/home/home.component';
//import {MatCardModule} from '@angular/material/card';
const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

export function loggerCallback(logLevel: LogLevel, message: string) {
  console.log(message);
}

export function MSALInstanceFactory():IPublicClientApplication{
  return new PublicClientApplication({
    auth: {
      clientId: 'e533f57b-7fc3-4966-aca0-e9809038c09c',
      authority: 'https://login.microsoftonline.com/85c997b9-f494-46b3-a11d-772983cf6f11',
      redirectUri: 'http://localhost:4200',
    }
  })
}

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    MenuComponent,
    OrderComponent,
    VendorHomeComponent,
    ViewAllFoodItemComponent,
    ViewAllOrderComponent,
    EditFoodItemComponent,
    AddFoodItemComponent,
    AddEmployeeComponent,
    ViewAllEmployeeComponent,
    AdminHomeComponent,
    EditEmployeeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MsalModule
    // MsalModule.forRoot(new PublicClientApplication({
        // auth: {
          // clientId: 'e533f57b-7fc3-4966-aca0-e9809038c09c',
          // authority: 'https://login.microsoftonline.com/85c997b9-f494-46b3-a11d-772983cf6f11',
          // redirectUri: 'http://localhost:4200',
          ////navigateToLoginRequestUrl: false
        // },
        // cache: {
        //   cacheLocation: 'localStorage',
        //   storeAuthStateInCookie: isIE,
        // },
        // system: {
        //   loggerOptions: {
        //     loggerCallback,
        //     logLevel: LogLevel.Info,
        //     piiLoggingEnabled: false
        //   }
        // }
      //}),
      // {
      //   interactionType: InteractionType.Redirect, // MSAL Guard Configuration
      //   authRequest: {
      //     scopes: []
      //   },
      //   loginFailedRoute: '/loginerror'
      // },
      // {
      //   interactionType: InteractionType.Redirect, // MSAL Interceptor Configuration
      //   protectedResourceMap: new Map()

      // },
    //)
  ],
  providers: [
    { provide: MSAL_INSTANCE, useFactory: MSALInstanceFactory },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
