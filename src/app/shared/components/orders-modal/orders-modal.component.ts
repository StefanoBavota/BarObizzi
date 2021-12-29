import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IOrder } from 'src/app/features/pages/operator/interfaces/order.interface';
import { OperatorService } from 'src/app/features/pages/operator/services/operator.service';

@Component({
  selector: 'app-orders-modal',
  templateUrl: './orders-modal.component.html',
  styleUrls: ['./orders-modal.component.scss'],
})
export class OrdersModalComponent implements OnInit {
  ordersList: IOrder[];

  constructor(private modalController: ModalController, private operetorService: OperatorService) { }

  ngOnInit() {
  }

  onCompleted(tableId: string) {
    console.log("Tavolo:", tableId, "eliminato!");
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
