import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddProductComponent } from 'src/app/shared/components/add-product/add-product.component';
import { EditProductComponent } from 'src/app/shared/components/edit-product/edit-product.component';
import { IProduct } from '../operator/interfaces/order.interface';
import { TypeChoiceService } from '../type-choice/services/type-choice.service';

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.page.html',
  styleUrls: ['./product-manage.page.scss'],
})
export class ProductManagePage implements OnInit {
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

  async onEdit() {
    const modal = await this.modalController.create({
      component: EditProductComponent,
      cssClass: 'edit-product',
      componentProps: {
        typeId: this.typeId,
      },
    });
    return await modal.present();
  }

  async onCreate() {
    const modal = await this.modalController.create({
      component: AddProductComponent,
      cssClass: 'add-product',
      componentProps: {
        typeId: this.typeId,
      },
    });
    return await modal.present();
  }

  onDelete() {
    console.log("Deleted")
  }
}
