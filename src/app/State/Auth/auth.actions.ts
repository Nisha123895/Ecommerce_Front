import { createAction, props } from "@ngrx/store";

export const login = createAction('[Auth] Login', props<{email:string, password:string}>())

export const loginSuccess = createAction('[Auth] Login Success', props<{user:any}>())

export const loginFaliure = createAction('[Auth] Login Failure', props<{error : any}>())

export const register = createAction('[Auth] Register', props<{user : any}>())

export const registerSuccess = createAction('[Auth] Register Success', props<{user : any}>())

export const registerFaliure = createAction('[Auth] Register Faliure', props<{error : any}>())