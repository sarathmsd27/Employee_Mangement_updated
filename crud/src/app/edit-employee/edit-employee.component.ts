import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit{
 
  id:any;
  addEmployee:any='';
  constructor(private fb:FormBuilder,private routes:Router,private employeeservice:EmployeeService,private url:ActivatedRoute){
    this.addEmployee = fb.group({
       fullname:["",Validators.required],
       age:["",[Validators.required, Validators.min(18), Validators.max(100)]],
       email:["",[
        Validators.required,
        Validators.email,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ]],
      aadharnum:["",[Validators.pattern(/^\d{12}$/)]],
    })
  }
ngOnInit(): void {

  this.id = this.url.snapshot.params["id"];
   console.log(this.id);
   this.employeeservice.singleEmployee(this.id).subscribe((data)=>{
    this.addEmployee.patchValue(data)
   })
    
}
onSubmit(){
  console.log(this.addEmployee.value);
  this.employeeservice.updateEmployee(this.id,this.addEmployee.value).subscribe((data:any)=>{
   console.log(data);
   this.routes.navigate(['/list-employee']);
  })
}

}
  