import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ICustomer } from 'src/app/shared/icustomer';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {

 logCust:ICustomer;

  // loginFrm!: FormGroup;
  // email:string="";
  // password:string="";

// invalidLogin:boolean=false;

  constructor(private fb:FormBuilder ,private userService: UserService , private http:HttpClient , private router: Router)
  { this.logCust = {email:'' , password:'' }}


  formModel = this.fb.group({
    email:['',[Validators.required,Validators.minLength(3)]],
    password:['',[Validators.required,Validators.minLength(3)]]


  });

  ngOnInit(): void {
    // this.loginFrm=this.fb.group({
    //   email:['',[Validators.required,Validators.minLength(3)]],
    //   password:['',[Validators.required,Validators.minLength(3)]]
    // });
  }

// login(form:NgForm){
// const credentials ={
// 'email':form.value.email,
// 'password':form.value.password
// }

// this.http.post("https://test-api.storexweb.com/api/login" , credentials)
// .subscribe({
// next:(res => {
// const token=(<any>res).token;
// console.log(token);
// localStorage.setItem("jwt" , token);
// // this.invalidLogin=false;
// alert("your loggin is true");
// this.router.navigate(["/Home"]);
// }),
// error: (err) => console.log(err.message),
// })
// }

//


onSubmit(form: NgForm) {
  this.userService.UserLogin(form.value).subscribe({
next:((res:any) => {
  // this.userService.Login(res.token);
  localStorage.setItem('token', res.token);
  this.router.navigateByUrl('/Home');
}),
 error:(err) =>
        console.log(err),
});
}

submit(){
console.log(this.formModel);
this.userService.UserLogin(this.formModel.value).subscribe({
  next:((res:any) => {
  console.log(res);
    // this.userService.Login(res.token);
//save token in localstorage to checkiflocalstoragehasdata
    localStorage.setItem('token', res.authorisation.token);
    this.router.navigateByUrl('/Home');
  }),
   error:(err) =>
          console.log(err),
  });
}

  // login(email:string , password:string){
  //   this.userService.loginUser(email,password).subscribe(
  //     {
  //       next: (res) =>
  //       {
  //       console.log(res);
  //       this.userService.Login(res.access_token);
  //       console.log("Authorized");
  //       console.log(res.access_token);
  //       localStorage.setItem('id',res.Id);
  //       },
  //       error: (err) => console.error(err),
  //     }
  //   );
  //   //alert("You logged in Now")
  // }

logout(){
this.userService.logoutUser();
this.router.navigateByUrl('/Loggin');

}

}
