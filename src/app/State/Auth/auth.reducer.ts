import { createReducer, on } from "@ngrx/store";
import { login, loginFaliure, loginSuccess, register, registerFaliure, registerSuccess } from "./auth.actions";
const initialSate={
    user:null,
    loading:false,
    error:null
}

export const authReducer=createReducer(
    initialSate,
    on(login, (state)=>({...state,loading:true, error:null})),
    on(loginSuccess, (state,{user})=>({...state,loading:false, error:null,user})),
    on(loginFaliure, (state,{error})=>({...state,loading:true, error:error})),




    on(register, (state)=>({...state,loading:true, error:null})),
    on(registerSuccess, (state,{user})=>({...state,loading:false, error:null,user})),
    on(registerFaliure, (state,{error})=>({...state,loading:true, error:error})),
)