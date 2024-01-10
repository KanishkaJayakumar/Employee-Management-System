import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export default class AppComponent {
// submit(empdata: any) {
//   console.log("form submitted",empdata);
  
//}
  @ViewChild('empform')
  empform!: NgForm;
employees: any[] = [];
editingIndex: number | null = null;

departmentlist : any = ['COMPUTER SCIENCE & ENGINEERING', 'IT','ElECTRONICS ENGINEERING','ELECTRICAL ENGINEERING', 'COMPUTER SCIENCE & BUSINESS SYSTEMS','OTHERS' ]

  

submit(empdata: any) {
  // console.log("Form submitted", empdata);
  
  // // Add the submitted data to the employees array
  // this.employees.push(empdata);
  if (this.editingIndex !== null) {
    // Update existing employee data if editing
    this.employees[this.editingIndex] = { ...empdata };
    this.editingIndex = null; // Reset editing state
  } else {
    // Add the submitted data to the employees array
    this.employees.push({ ...empdata });
  }

  // Save the updated employees array to local storage
  localStorage.setItem('employees', JSON.stringify(this.employees));

  // Clear the form after submission
  // You may want to reset the form differently based on your requirements
  // For example, you can use Angular Forms API to reset the form
  this.empform.resetForm();
}

// Other existing code...

// Fetch the employees array from local storage on component initialization
ngOnInit() {
  const storedEmployees = localStorage.getItem('employees');
  if (storedEmployees) {
    this.employees = JSON.parse(storedEmployees);
  }
}

// toUpperCase(event: any) {
//   event.target.value = event.target.value.toUpperCase();
// }

editEmployee(index: number) {
  // Create a copy of the employee object to avoid directly modifying the original array
  const editedEmployee = { ...this.employees[index] };

  // Set the form values for editing
  this.empform.setValue(editedEmployee);
  this.editingIndex = index;
}

updateEmployee() {
  // Trigger the submit method for updating
  this.submit(this.empform.value);
  // this.editingIndex = null; // Reset editing state
  this.empform.resetForm();
}
  title = 'EmpMangmt';
  deleteEmployee(index: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      // Use the index to remove the employee from the array
      this.employees.splice(index, 1);
  
      // Save the updated employees array to local storage
      localStorage.setItem('employees', JSON.stringify(this.employees));
    }
  }
}

