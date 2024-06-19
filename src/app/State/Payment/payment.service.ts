import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { createPaymentFailure, createPaymentSuccess, updatePaymentFailure, updatePaymentSuccess } from './payment.action';
import { BASE_API_URL } from 'src/app/config/api';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  API_BASE_URL = BASE_API_URL;

  constructor(
    private store: Store,
    private http: HttpClient,
    private router: Router
  ) {}

  createPayment(orderId: any) {
    const url = `${this.API_BASE_URL}/api/payments/${orderId}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    });

    return this.http
      .post(url, {}, { headers })
      .pipe(
        map((data: any) => {
          console.log("created Payment", data)
          if (data.payment_link_url) {
            this.openExternalUrl(data.payment_link_url);
          }
          return createPaymentSuccess({ payload: data });
        }),
        catchError((error: any) => {
          return of(
            createPaymentFailure(
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            )
          );
        })
      )
      .subscribe((action) => this.store.dispatch(action));
  }

  updatePayment(reqData: any) {
    console.log('update payment reqData ', reqData);
    const url = `${this.API_BASE_URL}/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    });
    return this.http
      .get(url, { headers })
      .pipe(
        map((response: any) => {
          return updatePaymentSuccess({ payload: response });
        }),
        catchError((error) => {
          const errorMessage = error.message;
          return of(
            updatePaymentFailure(
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            )
          );
        })
      )
      .subscribe((action) => this.store.dispatch(action));
  }
  openExternalUrl(url: string) {
    window.open(url, '_blank');
  }
}
