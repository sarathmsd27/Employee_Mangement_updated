import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { FrontPageComponent } from './front-page/front-page.component';


const routes: Routes = [
  
  {path:"add-employee",component:AddEmployeeComponent},
  {path:"edit-employee/:id",component:EditEmployeeComponent},
  {path:"list-employee",component:ListEmployeeComponent},
  {path:"",component:FrontPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
