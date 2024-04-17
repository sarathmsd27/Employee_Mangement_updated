import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http:HttpClient) {}

  addEmployee(employee:any){
    return this.http.post("http://localhost:4000/endpoint/add-empdata",employee)
  }

  listEmployee(){
    return this.http.get("http://localhost:4000/endpoint/")
 }

 deleteEmployee(id:any){
  return this.http.delete("http://localhost:4000/endpoint/del-empdata/"+id)
 }

 singleEmployee(id:any){
  return this.http.get("http://localhost:3000/endpoint/empdata/"+id)
 }

 updateEmployee(id:any,employee:any){
  return this.http.put("http://localhost:4000/endpoint/update-empdata/"+id,employee)
 }
}