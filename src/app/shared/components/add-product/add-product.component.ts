import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { IProduct } from 'src/app/features/pages/operator/interfaces/order.interface';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  typeId: number;
  newProductForm: FormGroup;

  constructor(private modalController: ModalController, private formBuilder: FormBuilder) {
    this.newProductForm = this.formBuilder.group(
      {
        name: [null, [Validators.required]],
        description: [""],
        price: [null, [Validators.required]],
      },
    );
  }

  ngOnInit() { }

  onConfirm() {
    if (this.newProductForm.valid) {
      let data: IProduct = {
        name: this.newProductForm.value.name,
        description: this.newProductForm.value.description,
        price: this.newProductForm.value.price,
        typeId: this.typeId
      }
      //TODO: add data to api with new product
      this.onDismiss()
    }
  }

  onDismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
