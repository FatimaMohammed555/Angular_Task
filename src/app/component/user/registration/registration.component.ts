import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ICustomer } from 'src/app/shared/icustomer';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerUserData:ICustomer;


  constructor(private userService: UserService , private router: Router) {
    this.registerUserData = {name:'' , password:'' , email:''}
  }

  ngOnInit(): void {
  }

  registerUser() {
    this.userService.registerUser(this.registerUserData).subscribe({
      next: (res) =>
      {
      console.log(res);
      alert("you are registration now");
      this.router.navigateByUrl("/Home");
      },
      error: (err) => console.error(err),
    })
  }

}
