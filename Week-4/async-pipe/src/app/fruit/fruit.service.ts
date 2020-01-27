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
import { Fruit } from './fruit';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

@Injectable()

export class FruitService {
  fruits: Fruit[] = [
    { id: 1, name: 'Mango', pricePerPound: '0.50', quantity: 50 },
    { id: 2, name: 'Apple', pricePerPound: '0.65', quantity: 10 },
    { id: 3, name: 'Watermelon', pricePerPound: '1.36', quantity: 3 },
    { id: 4, name: 'Grapes', pricePerPound: '0.89', quantity: 20 },
    { id: 5, name: 'Kiwis', pricePerPound: '2.00', quantity: 15 }
  ];


  constructor() { }

  getFruits(): Observable<Fruit[]> {

    return Observable.of(this.fruits);
    /*return of(this.fruitList);*/
  }
}
