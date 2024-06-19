import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { catchError, map, of } from "rxjs";
import { BASE_API_URL } from "src/app/config/api";
import { loginFaliure, loginSuccess, registerFaliure, registerSuccess } from "./auth.actions";

@Injectable({
    providedIn:'root',
})

export  class AuthService{
    private apiUrl = BASE_API_URL+"/auth";

    constructor(private http:HttpClient, private store: Store){}

    login(loginData:any){
        return this.http.post(`${this.apiUrl}/signin`, loginData).pipe(
            map((user:any)=>{
                console.log('login user', user)
                if(user.jwt){
                    localStorage.setItem("jwt", user.jwt);
                }
                return loginSuccess({user})
            }),
            catchError((error)=>{
                return of(
                    loginFaliure(
                        error.response && error.response.data.message?
                        error.response.data.message : error.message
                    )
                );
            })
        ).subscribe((action)=>
            this.store.dispatch(action)
        )
    }


    register(user:any){
        return this.http.post(`${this.apiUrl}/signup`, user).pipe(
            map((user:any)=>{
                console.log('register user', user)
                if(user.jwt){
                    localStorage.setItem("jwt", user.jwt);
                }
                return registerSuccess({user})
            }),
            catchError((error)=>{
                return of(
                    registerFaliure(
                        error.response && error.response.data.message?
                        error.response.data.message : error.message
                    )
                )
            })
        ).subscribe((action)=>{
            this.store.dispatch(action)
        })
    }
}