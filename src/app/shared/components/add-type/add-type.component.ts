import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.scss'],
})
export class AddTypeComponent implements OnInit {
  newTypeForm: FormGroup;

  constructor(private modalController: ModalController, private formBuilder: FormBuilder) {
    this.newTypeForm = this.formBuilder.group(
      {
        name: [null, [Validators.required]],
      },
    );
  }

  ngOnInit() { }

  onConfirm() {
    if (this.newTypeForm.valid) {
      const newType = this.newTypeForm.value;

      this.modalController.dismiss({
        'dismissed': true,
        newType: newType
      });
    }
  }

  onDismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
