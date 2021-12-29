import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-custom-order',
  templateUrl: './custom-order.component.html',
  styleUrls: ['./custom-order.component.scss'],
})
export class CustomOrderComponent implements OnInit {
  customOrderForm: FormGroup;

  constructor(private modalController: ModalController, private formBuilder: FormBuilder) {
    this.customOrderForm = this.formBuilder.group(
      {
        name: [null, [Validators.required]],
        description: [""],
        price: [null, [Validators.required]],
      },
    );
  }

  ngOnInit() { }

  onConfirm() {
    if (this.customOrderForm.valid) {
      const customOrder = this.customOrderForm.value;

      this.modalController.dismiss({
        'dismissed': true,
        customOrder: customOrder
      });
    }
  }

  onDismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
