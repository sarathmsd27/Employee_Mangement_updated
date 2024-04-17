import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  addEmployee:any='';
  constructor(private fb:FormBuilder,private routes:Router,private employeeservice:EmployeeService){
    this.addEmployee = fb.group({
       fullname:["",Validators.required],
       age:["",[Validators.required, Validators.min(18), Validators.max(100)]],
       email:["",[
        Validators.required,
        Validators.email,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ]], 
      aadharnum:["",[Validators.pattern(/^\d{12}$/)]],
      mobnum:["",[Validators.pattern(/^\d{10}$/)]]
    })
  }
ngOnInit(): void {}

onSubmit(){
  console.log(this.addEmployee.value);
  this.employeeservice.addEmployee(this.addEmployee.value).subscribe((data:any)=>{
   console.log(data);
   this.routes.navigate(['/list-employee']);
  })
}

}
