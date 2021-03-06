/*
============================================
; Author: Wendy Portillo
; Date:   2/29/2020
; Description: web-425/Bob's Computer Repair
;===========================================
*/

import { Component, OnInit, EventEmitter, Input } from '@angular/core';

import { Services } from '../../models/Services';

import { RepairServicesService } from '../../services/repair-services.service'

@Component({
  selector: 'app-shop-services',
  templateUrl: './shop-services.component.html',
  styleUrls: ['./shop-services.component.css']
})
export class ShopServicesComponent implements OnInit {

  services: Services[];
  cart: Array<object> = [];
  cartTotal: Array<number> = [];
  sum: number = 0;

  manualHours: any = 0;
  invoiceTotal: any;


  constructor(private repairServices: RepairServicesService) {  }

  ngOnInit() {

    this.services = this.repairServices.getAll()
  }

  moveToCart(service) {
    this.cart.push(service);
  }

  removeFromCart(name) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i]['name'] == name) {
        this.cart.splice(i,1);
      }
    }

  }

  removeFromTotal(price) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cartTotal[i]) {
        this.cartTotal.splice(i);
      }
  }
}

  tallyTotal() {
    if(this.cart.length == undefined || this.cart.length == 0) {
      this.cartTotal = [];}

    for (let i = 0; i < this.cart.length; i++) {
      this.cartTotal.push(this.cart[i]['price']);
    }
    console.log(this.cartTotal);
  }

  totalPrice(){
    let sum = 0;
    for ( let i = 0; i < this.cartTotal.length; i++) {
      sum += this.cartTotal[i];
    }
    this.sum = sum

    this.invoiceTotal = this.sum + this.manualHours;
  }


  totalHours(hours) {
    this.manualHours = hours * 50;
    console.log(this.manualHours);
  }

  removeHours() {
    this.manualHours = 0;
    this.invoiceTotal = this.sum;

  }


}
