import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IProduct } from 'src/app/features/pages/operator/interfaces/order.interface';

@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.scss'],
})
export class TableInfoComponent implements OnInit {
  productList: IProduct[];
  tableId: string;

  constructor(private modalController: ModalController, private router: Router) { }

  ngOnInit() { }

  onCompleted(tableId: string) {
    console.log("Tavolo:", tableId, "eliminato!");
  }

  onDismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
