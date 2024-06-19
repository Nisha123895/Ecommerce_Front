import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCartComponent implements OnInit {

  constructor(private router : Router) { }

  navigateToOrderDetails=(id:Number)=>{
    this.router.navigate([`orders/${id}`])
  }



  ngOnInit(): void {
  }

}
