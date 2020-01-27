/*
=======================================
  ; Title: fruit.component.spec.ts
  ; Author: Richard Krasso
  ; Date: 26 January 2020
  ; Modified By: Wendy Portillo
  ; Description: fruit.service.spec.ts
========================================
*/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitComponent } from './fruit.component';

describe('FruitComponent', () => {
  let component: FruitComponent;
  let fixture: ComponentFixture<FruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FruitComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
