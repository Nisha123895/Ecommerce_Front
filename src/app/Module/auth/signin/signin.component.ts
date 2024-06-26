import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/State/Auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  @Input() changeTamplate:any;

  constructor(private formBuilder:FormBuilder, private store: Store, private authService: AuthService) { }

  loginForm : FormGroup = this.formBuilder.group({
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required,Validators.minLength(8)]]
  })

  submitForm(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value);
      console.log("login req data", this.loginForm.value);
      
    }
  }

  ngOnInit(): void {
  }

}
