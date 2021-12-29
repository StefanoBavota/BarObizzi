import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IProduct } from 'src/app/features/pages/operator/interfaces/order.interface';
import { OperatorService } from 'src/app/features/pages/operator/services/operator.service';
import { IOrder } from '../../../features/pages/operator/interfaces/order.interface';

@Component({
  selector: 'app-checkout-modal',
  templateUrl: './checkout-modal.component.html',
  styleUrls: ['./checkout-modal.component.scss'],
})
export class CheckoutModalComponent implements OnInit {
  productList: IProduct[];
  tableId: string;

  constructor(private modalController: ModalController, private operatorService: OperatorService, private router: Router) { }

  ngOnInit() { }

  onCompleted() {
    let data: IOrder = {
      tableId: this.tableId,
      productsList: this.productList
    }
    this.operatorService.ordersList.push(data)
    this.onDismiss();
    this.router.navigate(["/operator"]);
  }

  onDismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
