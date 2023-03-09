import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Employee } from './Model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements OnInit {

  base_url="http://localhost:3000/employee";

  data:any;

  myheadders=new HttpHeaders().set("authkey","value");
  myparams=new HttpParams().set("employeedetails","value1");
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    this.GetDetails();
  }
  //Get Data from json url
  GetDetails():Observable<any>
  {
    return this.http.get(this.base_url,{headers:this.myheadders});
  }
  //Add New data to json server using url
  CreateDetails(data:any):Observable<any>
  {
    return this.http.post(this.base_url,data).pipe(
      catchError(this.handleError));
  }
  //Delete existing data from json server using url
  DeleteDetails(id:any):Observable<any>
  {
    return this.http.delete(this.base_url+"/"+id);
  }
  //Update existing data from json server using url
  //here we are using DTO to Update
  UpdateDetails(data:Employee)
  {
    return this.http.put(this.base_url+"/"+data.id,data).pipe(
      catchError(this.handleError));
  }
  //to update data we need single data so we are getting data by passing ID
  GetDetailsById(id:number)
  {
    return this.http.get(this.base_url+"/"+id);
  }

//method for exception handling by using built in responses
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };




  

}
