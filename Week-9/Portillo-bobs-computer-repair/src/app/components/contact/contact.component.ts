/*
============================================
; Author: Wendy Portillo
; Date:   2/29/2020
; Description: web-425/Bob's Computer Repair
;===========================================
*/

import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  messageInfo = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  }


  constructor() { }

  ngOnInit() {
  }

  // onClick() {
  //   alert('Your message has been received!');
  //   this.messageInfo.firstName = '';
  // }

  onSubmit(event: any) {
    console.log(event);
    alert(this.messageInfo.firstName + ' ' + this.messageInfo.lastName + ', thank you for your message. We have received it and will get back to you shortly.');
    event.resetForm();
  }


}
