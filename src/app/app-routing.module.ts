import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/Employees/menu/menu.component';
import { AppComponent } from './app.component';
import { OrderComponent } from './components/Employees/order/order.component';
import { VendorHomeComponent } from './components/Vendor/vendor-home/vendor-home.component';
import { ViewAllFoodItemComponent } from './components/Vendor/view-all-food-item/view-all-food-item.component';
import { ViewAllOrderComponent } from './components/Vendor/view-all-order/view-all-order.component';
import { EditFoodItemComponent } from './components/Vendor/edit-food-item/edit-food-item.component';
import { AddFoodItemComponent } from './components/Vendor/add-food-item/add-food-item.component';
import { ViewAllEmployeeComponent } from './components/Admin/view-all-employee/view-all-employee.component';
import { AddEmployeeComponent } from './components/Admin/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/Admin/edit-employee/edit-employee.component';
import { AdminHomeComponent } from './components/Admin/admin-home/admin-home.component';
import { MsalGuard } from '@azure/msal-angular';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [MsalGuard] },
  { path: 'menu', component: MenuComponent, data: {breadcrumb: 'Menu'}} ,
  { path: 'order', component:OrderComponent},
  {path:'admin', component:AdminHomeComponent},
  { path: 'vendor', component: VendorHomeComponent },
  { path: 'allitem', component: ViewAllFoodItemComponent },
  { path: 'allorders', component:ViewAllOrderComponent },
  {path: 'editfooditem/:id', component:EditFoodItemComponent},
  {path: 'addfooditem', component:AddFoodItemComponent},
  {path:'allemployee', component:ViewAllEmployeeComponent},
  {path:'addemployee', component:AddEmployeeComponent},
  {path:'editemployee/:id', component:EditEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
