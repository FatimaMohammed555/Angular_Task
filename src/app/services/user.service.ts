import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ICustomer } from '../shared/icustomer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  customer:ICustomer = {
  name:"",
  email:"",
  password:"",
  };

  constructor(private httpClient: HttpClient
             ,private router: Router ) { }

//Add user
registerUser(custm: ICustomer){
  const httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
    // ,'Authorization': 'my-auth-token'
      })};

  return this.httpClient.post(`${environment.API_URL}/register`, custm, httpOptions);
}

//login user
loginUser(email:string , password:string){

  var data = "UserEmail="+email +"&Password="+password;

  const httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencouded'

    // ,'Authorization': 'my-auth-token'
      })};
      console.log(data);
  return this.httpClient.post(`${environment.API_URL}/login`, data, httpOptions);
}

//code
UserLogin(formData: any) {
  return this.httpClient.post(`${environment.API_URL}/login`, formData);
}

Login(token:string)
{
   localStorage.setItem('UserToken',token);
}


isLogged(): boolean {
  if (localStorage.getItem('UserToken')) {
    return true ;
  }
  else {
    return false;
  }
}

logoutUser() {
  localStorage.removeItem('token');
  localStorage.clear();
  alert("You are logout now , you must loggin to see all orders");
  this.router.navigate(['/Home'])
}


}
