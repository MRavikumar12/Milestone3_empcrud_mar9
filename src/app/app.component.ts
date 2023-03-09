import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './Model/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Milestone3_empcrud_mar9';

  data:any;
  emp:any=[];

  //this is add New data ,because we need empty model to add 
  empl={
    id: 0,
    name: "",
    address: "",
    phone: 0,
    country: ""
  };

  //for updating,we need model so,passing Model using obj
  currentData:Employee={
    id: 0,
    name: "",
    address: "",
    phone: 0,
    country: ""
  }

  updateData:any;

 
//accessing services through constructor
  constructor(public service:EmployeeService){}

  ngOnInit()
  {
    this.GetEmployees();
  }

  //getting data from service and we will pass it to html
  GetEmployees()
  {
    this.service.GetDetails().subscribe((response)=>
    {
      this.emp=response;
    })
  }
  //adding data from service and we will pass it to html
  AddEmployee()
  {
    this.service.CreateDetails(this.empl).subscribe((resp)=>
    {
      this.GetEmployees();
    },(error=>{
      error.message("Fill correctly")
    }))
  }
  //Delete data 
  DeleteEmployee(id:any)
  {
    this.service.DeleteDetails(id).subscribe((resp)=>
    {
      this.GetEmployees();
    })
  }
//update and pass it to current data 
  UpdateEmployee()
  {
    this.service.UpdateDetails(this.currentData).subscribe((resp)=>
    {
      this.GetEmployees();
    },(error=>{
      error.message("not updated")
    }))
  }
  //getting data to update by id 
  GetCurrentEmployee(data:Employee)
  {
    this.service.GetDetailsById(data.id).subscribe((resp)=>
    {
      this.updateData=resp;
      this.currentData=this.updateData;
    })
  }

}
