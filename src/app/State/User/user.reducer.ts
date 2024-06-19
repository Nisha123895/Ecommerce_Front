import { createReducer, on } from "@ngrx/store";
import { getUserProfile, getUserProfileFaliure, getUserProfileSuccess, logoutSuccess } from "./user.actions";
const initialSate={
    userProfile:null,
    loading:false,
    error:null
}

export const userReducer=createReducer(
    initialSate,
    on(getUserProfile, (state)=>({...state,loading:true, error:null})),
    on(getUserProfileSuccess, (state,{userProfile})=>({...state,loading:false, error:null,userProfile})),
    on(getUserProfileFaliure, (state,{error})=>({...state,loading:true, error:error})),

    on(logoutSuccess, ()=>initialSate)




   
)