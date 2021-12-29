import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IOrder } from '../interfaces/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {
  ordersList: IOrder[];

  constructor() {
    this.getOrder()
  }

  getOrder(): Observable<IOrder[]> {
    return of(this.ordersList = [
      {
        tableId: "D4",
        productsList: [
          {
            productId: 1,
            name: "caffè",
            price: "1.00",
            quantity: 2,
            typeId: 1
          },
          {
            productId: 2,
            name: "cappuccino",
            price: "2.00",
            quantity: 1,
            typeId: 1
          },
          {
            productId: 3,
            name: "gineng",
            price: "1.00",
            quantity: 1,
            typeId: 1
          },
          {
            productId: 4,
            name: "spritz",
            price: "3.00",
            quantity: 1,
            typeId: 1
          },
        ]
      },
      {
        tableId: "D2",
        productsList: [
          {
            productId: 2,
            name: "cappuccino",
            price: "2.00",
            quantity: 2,
            typeId: 1
          },
        ]
      },
      {
        tableId: "D3",
        productsList: [
          {
            productId: 2,
            name: "cappuccino",
            price: "2.00",
            quantity: 1,
            typeId: 1
          },
        ]
      },
      {
        tableId: "D1",
        productsList: [
          {
            productId: 2,
            name: "cappuccino",
            price: "2.00",
            quantity: 1,
            typeId: 1
          },
        ]
      },
    ]
    )
  }
}
