import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {


constructor(private http: HttpClient, private router : Router, private fb: FormBuilder ) {}


  
savedraft() {
  const formData = { firstname: this.firstname, lastname: this.lastname, empid: this.empid, age: this.age, department:this.department, email:this.email, dob:this.dob, experience:this.experience, salary:this.salary, address: this.address };
  localStorage.setItem('formData', JSON.stringify(formData));
  console.log('Form data saved to localStorage:', formData);
}
  next() {
    this.router.navigate(['/page1'])
  }
    employees: any;
      firstname: any;
      lastname: any;
      responseMessage: string='';
      empid: any;
      age: any;
      department: any;
      email: any;
      dob: any;
      experience: any;
      salary: any;
      address: any;
      private baseUrl= 'http://localhost:8080/addemp'
    
    departmentlist : any = ['COMPUTER SCIENCE & ENGINEERING', 'IT','ElECTRONICS ENGINEERING','ELECTRICAL ENGINEERING', 'CSBS','OTHERS' ]
    selectedOption: string='';
    
   
    
    
    
    isFormValid: boolean = false;
    checkFormValidity() {
      this.isFormValid = !!this.firstname && !!this.lastname && !!this.empid && !!this.email && !!this.department && !!this.selectedOption && !!this.dob && !!this.salary && !!this.address;
    }
}
