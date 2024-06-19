import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/State/Auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @Input() changeTamplate:any;

  constructor(private formBuilder:FormBuilder, private store: Store, private authService:AuthService) { }

  loginForm : FormGroup = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required,Validators.minLength(8)]]
  })

  submitForm(){
    if(this.loginForm.valid){
      
      console.log("login req data", this.loginForm.value);
      this.authService.register(this.loginForm.value)
      
    }
  }


  ngOnInit(): void {
  }

}
