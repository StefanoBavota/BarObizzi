import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CheckoutModalComponent } from 'src/app/shared/components/checkout-modal/checkout-modal.component';
import { OrdersModalComponent } from 'src/app/shared/components/orders-modal/orders-modal.component';
import { TableInfoComponent } from 'src/app/shared/components/table-info/table-info.component';
import { TableModalComponent } from 'src/app/shared/components/table-modal/table-modal.component';
import { IOrder } from './interfaces/order.interface';
import { OperatorService } from './services/operator.service';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.page.html',
  styleUrls: ['./operator.page.scss'],
})
export class OperatorPage implements OnInit {
  ordersList: IOrder[];
  ordersNumber: number;

  constructor(private modalController: ModalController, private operatorService: OperatorService) { }

  ngOnInit() {
    this.getOrders();
  }

  ionViewDidEnter() {
    this.ordersNumber = this.ordersList.length
  }

  getOrders() {
    this.operatorService.getOrder().subscribe((res) => {
      this.ordersList = res;
    })
  }

  async onSelectTable(order: IOrder) {
    const modal = await this.modalController.create({
      component: TableInfoComponent,
      cssClass: 'checkout-modal',
      componentProps: {
        tableId: order.tableId,
        productList: order.productsList
      },
    });
    return await modal.present();
  }

  async showOrders() {
    const modal = await this.modalController.create({
      component: OrdersModalComponent,
      cssClass: 'orders-modal',
      componentProps: {
        ordersList: this.ordersList
      }
    });
    return await modal.present();
  }

  async newOrder() {
    const modal = await this.modalController.create({
      component: TableModalComponent,
      cssClass: 'table-modal'
    });
    return await modal.present();
  }
}
