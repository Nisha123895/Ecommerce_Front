import { createAction, props } from "@ngrx/store";

export const findProductByCategoryRequest=createAction(
    '[Product] FInd Products By Category Request',

)

export const findProductByCategorySuccess=createAction(
    '[Product] FInd Products By Category Success',
    props<{payload:any}>()
    
)

export const findProductByCategoryFaliure=createAction(
    '[Product] FInd Products By Category Faliure',
    props<{error:any}>()
    
)





export const findProductByIdRequest=createAction(
    '[Product] FInd Products By Id Request',

)

export const findProductByIdSuccess=createAction(
    '[Product] FInd Products By Id Success',
    props<{payload:any}>()
    
)

export const findProductByIdFaliure=createAction(
    '[Product] FInd Products By Id Faliure',
    props<{error:any}>()
    
)

