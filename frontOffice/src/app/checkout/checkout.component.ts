import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  // We load  Stripe
  stripePromise = loadStripe(environment.stripe);
  constructor(private http: HttpClient) {}

  async pay(): Promise<void> {
    // here we create a payment object
    const payment = {
      name: 'Iphone',
      currency: 'usd',
      // amount on cents *10 => to be on dollar
      amount: 99900,
      quantity: '1',
      cancelUrl: 'http://localhost:4200/#/event',
      successUrl: 'http://localhost:4200/#/part-client',
    };

    const stripe = await this.stripePromise;

    // this is a normal http calls for a backend api
    this.http
        .post(`${environment.serverUrl}/payment`, payment)
        .subscribe((data: any) => {
          // I use stripe to redirect To Checkout page of Stripe platform
          stripe.redirectToCheckout({
            sessionId: data.id,
          });
        },
            error => {
              console.error('Erreur lors de l\'appel à l\'API backend :', error);
              // Gérer l'erreur ici (par exemple, afficher un message d'erreur à l'utilisateur)
            }
        );
  }
}
