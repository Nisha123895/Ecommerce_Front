import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderFilter=[
    {value: "on_the_way", label:"On The Way"},
    {value: "delivered", label:"Delivered"},
    {value: "cancelled", label:"Cancelled"},
    {value: "returned", label:"Returned"},  
  ]
  orders = [[1,1],[1,1,1]];

  navigateToOrderDetails=(id:Number)=>{
    this.router.navigate([`order/${id}`])
  }

  constructor(private router : Router) { }

 

  ngOnInit(): void {
  }

}
