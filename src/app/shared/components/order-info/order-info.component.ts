import { Component, Input, OnInit } from '@angular/core';
import { IOrder, IProduct } from '../../../features/pages/operator/interfaces/order.interface';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss'],
})
export class OrderInfoComponent implements OnInit {
  @Input() tableId: string;
  @Input() productsList: IProduct[];

  constructor() { }

  ngOnInit() {}
}
