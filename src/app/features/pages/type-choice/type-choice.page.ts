import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CheckoutModalComponent } from 'src/app/shared/components/checkout-modal/checkout-modal.component';
import { CustomOrderComponent } from 'src/app/shared/components/custom-order/custom-order.component';
import { ProductsModalComponent } from 'src/app/shared/components/products-modal/products-modal.component';
import { IProduct } from '../operator/interfaces/order.interface';
import { IType } from './interfaces/type-choice.interface';
import { TypeChoiceService } from './services/type-choice.service';

@Component({
  selector: 'app-type-choice',
  templateUrl: './type-choice.page.html',
  styleUrls: ['./type-choice.page.scss'],
})
export class TypeChoicePage implements OnInit {
  tableId: string;
  typeChoiceList: IType[];
  productList: IProduct[] = [];
  customProduct: IProduct;

  constructor(private route: ActivatedRoute, private typeChoiceService: TypeChoiceService, private modalController: ModalController) { }

  ngOnInit() {
    this.route.params.subscribe((res: Params) => (this.tableId = res.tableId));
    this.getTypes();
  }

  getTypes() {
    this.typeChoiceService.getTypes().subscribe((res: IType[]) => {
      this.typeChoiceList = res;
    })
  }

  async onTypeSelect(typeId: number) {
    const modal = await this.modalController.create({
      component: ProductsModalComponent,
      cssClass: 'products-modal',
      componentProps: {
        typeId: typeId,
        tableId: this.tableId,
      },
    });

    modal.onDidDismiss().then((data) => {
      if (data['data'].partialList) {
        for (let product of data['data'].partialList) {
          this.productList.push(product)
        }
      }
    });

    return await modal.present();
  }

  async onCustom() {
    const modal = await this.modalController.create({
      component: CustomOrderComponent,
      cssClass: 'custom-order',
    });

    modal.onDidDismiss().then((data) => {
      this.customProduct = data['data'].customOrder;
      console.log(this.customProduct)
    });

    return await modal.present();
  }

  async onCheckout() {
    const modal = await this.modalController.create({
      component: CheckoutModalComponent,
      cssClass: 'checkout-modal',
      componentProps: {
        tableId: this.tableId,
        productList: this.productList
      },
    });
    return await modal.present();
  }
}
