import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {
aadhaar: any;
account: any;
ifsc: any;
bankname: any;
branchname: any;
pan: any;

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
      selectedOption : string =''
      private baseUrl : string = 'https://employee-management-system-dhpx.onrender.com/addemp'

constructor(private http : HttpClient) {}

savedraft2() {
  const formData2 = { aadhaar: this.aadhaar, account: this.account, ifsc: this.ifsc, bankname:this.bankname, branchname: this.branchname, pan: this.pan };
  localStorage.setItem('formData2', JSON.stringify(formData2));
  console.log('Form data saved to localStorage:', formData2);
}


submitformdata() {
  const formData = JSON.parse(localStorage.getItem('formData') as string);
  if (formData !== null) { 
    console.log('Form data retrieved from localStorage:', formData);
  } else {
    console.log('Form data is null or not found in localStorage');
  }
  const formData2 = JSON.parse(localStorage.getItem('formData2') as string);
  if (formData2 !== null) { 
    console.log('Form data2 retrieved from localStorage:', formData2);
  } else {
    console.log('Form data2 is null or not found in localStorage');
  } 

  const combinedFormData = { ...formData, ...formData2 };

// Store the combined object in local storage
localStorage.setItem('combinedFormData', JSON.stringify(combinedFormData));

// Retrieve the combined object from local storage
const storedCombinedFormData = JSON.parse(localStorage.getItem('combinedFormData') || '{}');

  // Send both form data to the server
  this.http.post(`${this.baseUrl}/savedata`, storedCombinedFormData).subscribe(response => {
    console.log('Data saved successfully:', response);
    // Optionally, clear form data from storage after successful submission
    // localStorage.removeItem('formData');
    // localStorage.removeItem('formData2');
  }, error => {
    console.error('Error saving data:', error);
  });
}

}
