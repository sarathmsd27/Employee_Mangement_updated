import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit{
   employee: any;
   constructor(private employeeservice:EmployeeService,private routes:Router){}
   ngOnInit(): void {
       this.loadEmployee();
   }
   loadEmployee(){
    this.employeeservice.listEmployee().subscribe((data)=>{
      this.employee = data;
      console.log(data);
    })
   }
   delEmployee(datas:any){
    this.employeeservice.deleteEmployee(datas._id).subscribe((data)=>{
      console.log(data);
      alert("Are you sure want to delete permanently")
      this.employee = this.employee.filter((u:any)=>u!==datas)
    })
   }
  }
