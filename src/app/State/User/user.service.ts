import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { catchError, map, of } from "rxjs";
import { BASE_API_URL } from "src/app/config/api";
import { getUserProfileFaliure, getUserProfileSuccess, logoutSuccess } from "./user.actions";

@Injectable({
    providedIn: 'root',
  })
  export class UserService {
    private apiUrl = BASE_API_URL + "/api";
    headers: HttpHeaders;
  
    constructor(private http: HttpClient, private store: Store) {
      // Properly initialize headers
      this.headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("jwt")}`);
    }
  
    getUserProfile() {
      const headers=new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("jwt")}`);
      return this.http.get(`${this.apiUrl}/users/profile`, { headers}).pipe(
        map((user: any) => {
          console.log('user profile success', user);
          return getUserProfileSuccess({ userProfile: user });
        }),
        catchError((error) => {
          return of(
            getUserProfileFaliure(
              error.response && error.response.data.message ?
                error.response.data.message : error.message
            )
          );
        })
      ).subscribe((action) => {
        this.store.dispatch(action);
      });
    }

    logout(){
      localStorage.removeItem('jwt');
      this.store.dispatch(logoutSuccess())
    }
  }



  


  