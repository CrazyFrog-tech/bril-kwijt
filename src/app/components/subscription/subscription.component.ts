import { Component } from '@angular/core';

@Component({
  selector: 'subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {
  subscriptionOptions = [
    {
      duration: '3 days',
      price: 10,
      popularity: 'popular',
      details: [
        'Unlimited access to premium content',
        'HD streaming quality',
        'Access to mobile and desktop apps',
        '24/7 customer support',
        'Offline downloads'
      ]
    },
    {
      duration: '7 days',
      price: 15,
      popularity: 'bestseller',
      details: [
        'Access to exclusive movies and series',
        'Ad-free experience',
        'Multi-device support',
        'Personalized recommendations',
        'Family sharing'
      ]
    },
    {
      duration: '30 days',
      price: 25,
      popularity: 'premium',
      details: [
        '4K Ultra HD streaming',
        'Unlimited simultaneous streams',
        'Access to original content',
        'VIP customer support',
        'Early access to new releases'
      ]
    }
  ];

}
