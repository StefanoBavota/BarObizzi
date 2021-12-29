import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from '../../operator/interfaces/order.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductManageService {

  constructor() { }

  getProductById(): Observable<IProduct> {
    return of(
      {
        productId: 1,
        name: "Caffe",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptas numquam debitis obcaecati placeat nihil veniam, molestiae fugiat dicta unde.",
        price: "1.00",
        typeId: 1
      }
    )
  }
}
