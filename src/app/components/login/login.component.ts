import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  registeredUsers: any[] = [];
  isSubmitted: boolean  =  false;
  inValidUser: boolean = false;
  errorMessage: string;
  constructor(private formBuilder: FormBuilder,  private loginService: LoginService,private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)])
    })
  }

  public submit() {
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    } else {
      this.loginService.login(this.loginForm.value).subscribe( res => {
        if(res) {
          sessionStorage.setItem('currentUser', JSON.stringify(res));
          this.router.navigate(['dashboard']);
        }
      }, err => {
        this.inValidUser = true;
        this.errorMessage = err.error.message;
      });
    }
    // if(!this.loginForm.valid){
    //   return;
    // } else if(this.loginForm.valid) {
    //   this.registeredUsers = JSON.parse(localStorage.getItem("users"));
    // if(this.registeredUsers && this.registeredUsers.length) {
    //   let result = false;
    //   this.registeredUsers.map(item => {
    //     if( item && item.userName ) {
    //       if(item.userName === this.loginForm.value.username && this.loginForm.value.password === item.password) {
    //         console.log('Success');
    //         result = true;
    //         localStorage.setItem("currentUser", JSON.stringify(item));
    //       }
    //     }
    //   })
    //   if(result) {
    //     this.router.navigate(['/dashboard']);
    //   }
    // }
    // }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

}
