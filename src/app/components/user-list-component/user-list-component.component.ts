import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackendConnectionService } from 'src/app/services/backend-connection.service';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.scss']
})
export class UserListComponentComponent {
  data: any;
  filter = {
    name: "",
    email: ""
  }
  users: any[] = [];
  constructor(private handleData: BackendConnectionService) { }

  ngOnInit() {
    this.GetData()
  }
  GetData() {
    this.handleData.getData('users').subscribe({
      next: (response) => {
        this.data = response;
        this.users = this.data
        console.log(this.data);
      },
      error: (error) => {
        console.error('Error occurred:', error);
        if (error.status === 404) {
          console.log('Resource not found. Display a user-friendly message.');
        } else if (error.status === 401) {
          console.log('Unauthorized. Redirect to login or display a login prompt.');
        } else {
          console.log('Unexpected error. Display a generic error message.');
        }
      },
      complete: () => {
        // Optional: Handle any logic to be executed when the observable is complete
      }
    });
  }
  onSubmit(form: NgForm) {
    this.users = this.data.filter((user: any) => {
      const nameMatch = user.name.toLowerCase().includes(this.filter.name.toLowerCase());
      const emailMatch = user.email.toLowerCase().includes(this.filter.email.toLowerCase());
      return nameMatch && emailMatch;
    });
  }
}
