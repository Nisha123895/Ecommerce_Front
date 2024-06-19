import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { BASE_API_URL } from "src/app/config/api";
import { findProductByCategoryFaliure, findProductByCategorySuccess, findProductByIdFaliure, findProductByIdSuccess } from "./product.action";
import { catchError, map, of, throwError } from "rxjs";
//import { ProductRequest } from "src/app/Models/Product";
//import { ProductRequest } from "src/app/Models/Product";

@Injectable({
    providedIn:'root',
})

export class ProductService{
    API_BASE_URL=BASE_API_URL;

    private getHeader():HttpHeaders{
        const token=localStorage.getItem("jwt");
        return new HttpHeaders().set("Authorization", `Bearer ${token}`);
    }


    constructor(
        private store:Store,
        private http:HttpClient,
        private router: Router,
        private route:ActivatedRoute
      
    ){}

    findProductsByCategory(reqData: any) {
        const {
          colors,
          sizes,
          minPrice,
          maxPrice,
          minDiscount,
          category,
          imageUrl,
          stock,
          sort,
          pageNumber,
          pageSize,
        } = reqData;
    
        let params = new HttpParams()
          .set('color', colors)
          .set('size', sizes)
          .set('minPrice', minPrice)
          .set('maxPrice', maxPrice)
          .set('minDiscount', minDiscount)
          .set('category', category)
          .set('imageUrl', imageUrl)
          .set('stock', stock)
          .set('sort', sort)
          .set('pageNumber', pageNumber)
          .set('pageSize', pageSize);
        

            const headers = this.getHeader();
    
            return this.http.get(`${this.API_BASE_URL}/api/products`,{headers,params}).pipe(
                map((data:any)=>{
                    console.log("product details", data)
                    return findProductByCategorySuccess({payload:data})
                }),
    
                catchError((error:any)=>{
                    return of(findProductByCategoryFaliure(
                        error.response && error.response.data.message?
                        error.response.data.message:error.message
                    ))
                })
            ).subscribe((action)=>this.store.dispatch(action));
            
        }
    
      
    
        findProductById(productId:any){
            const headers = this.getHeader();
        
            return this.http.get(`${this.API_BASE_URL}/api/products/id/${productId}`,{headers}).pipe(
                map((data:any)=>{
                    console.log("product details", data)
                    this.store.dispatch(findProductByIdSuccess({payload:data}));
                    return data; // Return the data for further processing if needed
                }),
        
                catchError((error:any)=>{
                    this.store.dispatch(findProductByIdFaliure(
                        error.response && error.response.data.message?
                        error.response.data.message:error.message
                    ));
                    return throwError(error); // Rethrow the error for further handling if needed
                })
            );
        }
        
    
}