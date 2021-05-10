import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;
  registeredUsers: any[] = [];
  isUsernameValid: boolean = false;

  constructor(private registerService: RegisterService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        fullname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: this.mustMatch('password', 'confirmPassword'),
      }
    );
  }

  submit() {
    if(this.registerForm.invalid){
      return;
    } else {
      this.registerService.saveUser(this.registerForm.value).subscribe( res => {
        this.router.navigate(['login']);
      }, err => {
        this.isUsernameValid = true;
      })
    }
    // if (!this.registerForm.valid) {
    //   return;
    // } else {
    //   console.log(this.registerForm.value);
    //   this.registeredUsers.push(this.registerForm.value);
    //   localStorage.setItem("users", JSON.stringify(this.registeredUsers));
    //   this.router.navigate(['/login']);
    // }
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
