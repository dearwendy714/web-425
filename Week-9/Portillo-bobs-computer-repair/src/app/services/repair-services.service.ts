/*
============================================
; Author: Wendy Portillo
; Date:   2/29/2020
; Description: web-425/Bob's Computer Repair
;===========================================
*/

import { Injectable, EventEmitter } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Services } from '../models/Services';
import { ShopServicesComponent } from '../components/shop-services/shop-services.component';


@Injectable()

export class RepairServicesService {

  private services: Services[] = [
      {
        id: '1',
        icon: 'payment',
        name: 'Password Reset',
        price: 39
      },
      {
        id: '2',
        icon: 'memory',
        name: 'Spyware Removal',
        price: 99
      },
      {
        id: '3',
        icon: 'filter_drama',
        name: 'RAM Upgrade',
        price: 129
      },
      {
        id: '4',
        icon: 'computer',
        name: 'Software Instillation',
        price: 49
      },
      {
        id: '5',
        icon: 'tune',
        name: 'Tune-Up',
        price: 89
      },
      {
        id: '6',
        icon: 'keyboard',
        name: 'Keyboard Cleaning',
        price: 45
      },
      {
        id: '7',
        icon: 'healing',
        name: 'Disk Cleanup',
        price: 149
      }
  ]

  constructor() {

  }

  ngOnInit() {

  }

  getAll() {
    return this.services.slice();
  }

}

