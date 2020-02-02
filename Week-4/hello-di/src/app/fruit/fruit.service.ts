/*
========================================
  ; Title: fruit.service.ts
  ; Author: Richard Krasso
  ; Date: 26 January 2020
  ; Modified By: Wendy Portillo
  ; Description: fruit.service.ts
=========================================
*/
import { Injectable } from '@angular/core';
// import the fruit interface
import { Fruit } from './fruit';
// This is how you import rxjs for newer versions of Angular
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class FruitService {
  fruits: Fruit[] = [
    { id: 1, name: 'Mango', pricePerPound: '0.50', quantity: 50 },
    { id: 2, name: 'Papaya', pricePerPound: '1.75', quantity: 10 },
    { id: 3, name: 'Coconut', pricePerPound: '1.25', quantity: 3 },
    { id: 4, name: 'Watermelon', pricePerPound: '2.00', quantity: 20 },
    { id: 5, name: 'Banana', pricePerPound: '0.75', quantity: 15 }
  ];

  constructor() { }
  // retrieve the fruits array
  getFruits(): Observable<Fruit[]> {
    return of(this.fruits);
  }
}
