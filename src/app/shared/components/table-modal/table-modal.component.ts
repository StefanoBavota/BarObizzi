import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-table-modal',
  templateUrl: './table-modal.component.html',
  styleUrls: ['./table-modal.component.scss'],
})
export class TableModalComponent implements OnInit {
  tableNumberForm: FormGroup;

  constructor(private modalController: ModalController, private router: Router, private formBuilder: FormBuilder) {
    this.tableNumberForm = this.formBuilder.group(
      {
        tableId: [null, [Validators.required]]
      }
    );
  }

  ngOnInit() { }

  onConfirm() {
    if (this.tableNumberForm.valid) {
      const tableId = this.tableNumberForm.value.tableId.toUpperCase();
      this.router.navigate(['/type-choice', tableId]);
      this.onDismiss();
    }
  }

  onDismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
