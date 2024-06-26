import { Component, OnInit } from '@angular/core';
import { filters, singleFilter } from './FilterData';
import { mensPantsPage1 } from 'src/Data/pants/men_page1';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/State/Product/product.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  filterData: any;
  singleFilterData:any;
  menPants:any;
  products: any;
  lavelThree: any;


  constructor(private router:Router ,private activatedRoute:ActivatedRoute,
    private productsService:ProductService,private store:Store<AppState>
    ) {

   }

   ngOnInit() {
    this.filterData = filters;
    this.singleFilterData = singleFilter;
    this.menPants = mensPantsPage1;

    // Extract category from route parameters
    this.activatedRoute.paramMap.subscribe((params) => {
      this.lavelThree= params.get('lavelThree')
      var reqData={
        category:this.lavelThree,
        colors:[],
        sizes:[],
        minPrice:0,
        maxPrice:10000,
        minDiscount:0,
        pageNumber:0,
        pageSize:10,
        sort: 'price_low',
        stock:null,
      
      };
  
      
          this.productsService.findProductsByCategory(reqData);
      
  });

  this.activatedRoute.queryParams.subscribe(
    (params)=>{
      const color = params["color"]
      const size = params["size"]
      const price = params["price"]
      const discount = params["disccout"]
      const stock = params["stock"]
      const sort = params["sort"]
      const pageNumber = params["pageNumber"]
      const minPrice = price?.split("-")[0];
      const maxPrice = price?.split("-")[1];




var reqData={
      category: this.lavelThree,
          colors: color? [color].join(",") : [], // Extract and set color parameter
          sizes: size,
          minPrice: minPrice? minPrice : 0,
          maxPrice: maxPrice? maxPrice : 0,
          minDiscount: discount?discount:0,
          sort: sort?sort:'price_low',
          pageNumber: pageNumber? pageNumber:0,
          pageSize: 10,
          stock: null,
          
        };
      this.productsService.findProductsByCategory(reqData);
    }
  )

  this.store.pipe(select((store)=>store.product)).subscribe((product)=>{
    this.products=product.products.content
    console.log("store data", product.products.content)
  }
  );
  
}
  handleMultipleSelectFilter(value:string, sectionId:string){
    const queryParams={
      ...this.activatedRoute.snapshot.queryParams};
      console.log("query params ", queryParams)

      const filterValues = queryParams[sectionId]?queryParams[sectionId].split(","):[];

      const valueIndex= filterValues.indexOf(value);

      if(valueIndex!=-1){
        filterValues.splice(valueIndex,1)
      }else{
        filterValues.push(value);
      }
      if(filterValues.length>0){
        queryParams[sectionId]=filterValues.join(",")
      }else{
        delete queryParams[sectionId];
      }
      this.router.navigate([],{queryParams});
    }


    handleSingleSelectFilter(value:string, sectionId:string){
      const queryParams = { ...this.activatedRoute.snapshot.queryParams };
      queryParams[sectionId] = value;

      this.router.navigate([],{queryParams})
    }
    
  }


