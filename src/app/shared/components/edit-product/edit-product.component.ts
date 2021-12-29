import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { IProduct } from 'src/app/features/pages/operator/interfaces/order.interface';
import { ProductManageService } from 'src/app/features/pages/product-manage/services/product-manage.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  typeId: number;
  editProductForm: FormGroup;
  product: IProduct;

  constructor(private modalController: ModalController, private formBuilder: FormBuilder, private productManageService: ProductManageService) { }

  ngOnInit() {
    this.productManageService.getProductById().subscribe((res: IProduct) => {
      this.product = res;

      this.editProductForm = this.formBuilder.group({
        name: [this.product.name, [Validators.required]],
        description: this.product.description,
        price: [this.product.price, [Validators.required]]
      })
    });
  }

  onConfirm() {
    if (this.editProductForm.valid) {
      let data: IProduct = {
        name: this.editProductForm.value.name,
        description: this.editProductForm.value.description,
        price: this.editProductForm.value.price,
        typeId: this.typeId
      }
      //TODO: call api with edited product (update)
      this.onDismiss()
    }
  }

  onDismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
