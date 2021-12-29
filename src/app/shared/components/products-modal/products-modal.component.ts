import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IOrder, IProduct } from 'src/app/features/pages/operator/interfaces/order.interface';
import { TypeChoiceService } from 'src/app/features/pages/type-choice/services/type-choice.service';

@Component({
  selector: 'app-products-modal',
  templateUrl: './products-modal.component.html',
  styleUrls: ['./products-modal.component.scss'],
})
export class ProductsModalComponent implements OnInit {
  typeId: number = 1;
  allProduct: IProduct[];

  constructor(private typeChoiceService: TypeChoiceService, private modalController: ModalController) { }

  ngOnInit() {
    this.getProductsByTypeId()
  }

  getProductsByTypeId() {
    this.typeChoiceService.getProductsByTypeId(this.typeId).subscribe((res: IProduct[]) => {
      this.allProduct = res;
    })
  }

  onAdd(product: IProduct) {
    product.quantity++;
  }

  onDec(product: IProduct) {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }

  onConfirm() {
    const productsList: IProduct[] = this.allProduct.filter(product => product.quantity > 0);

    this.modalController.dismiss({
      'dismissed': true,
      partialList: productsList,
    });
  }

  onDismiss() {
    this.modalController.dismiss({
      'dismissed': true,
    });
  }
}
