import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from '../../operator/interfaces/order.interface';
import { IType } from '../interfaces/type-choice.interface';

@Injectable({
  providedIn: 'root'
})
export class TypeChoiceService {

  constructor() { }

  getTypes(): Observable<IType[]> {
    return of([
      {
        typeId: 1,
        name: "Caffetteria"
      },
      {
        typeId: 2,
        name: "Bevande"
      },
      {
        typeId: 3,
        name: "Aperitivi"
      },
      {
        typeId: 4,
        name: "Birre"
      },
      {
        typeId: 5,
        name: "Snacks"
      },
    ])
  }

  getProductsByTypeId(typeId: number): Observable<IProduct[]> {
    return of([
      {
        productId: 1,
        name: "Caffe",
        price: "1.00",
        quantity: 0,
        typeId: 1
      },
      {
        productId: 2,
        name: "Cappuccino",
        price: "2.00",
        quantity: 0,
        typeId: 1
      },
      {
        productId: 3,
        name: "Caffe Macchiato",
        price: "1.00",
        quantity: 0,
        typeId: 1
      },
      {
        productId: 4,
        name: "Caffe Salentino",
        price: "1.50",
        quantity: 0,
        typeId: 1
      },
      {
        productId: 5,
        name: "Caffe Americano",
        price: "1.50",
        quantity: 0,
        typeId: 1
      },
    ])
  }
}
