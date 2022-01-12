import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { IType } from 'src/app/features/pages/type-choice/interfaces/type-choice.interface';
import { TypeManageService } from 'src/app/features/pages/type-manage/services/type-manage.service';

@Component({
  selector: 'app-edit-type',
  templateUrl: './edit-type.component.html',
  styleUrls: ['./edit-type.component.scss'],
})
export class EditTypeComponent implements OnInit {
  typeId: number;
  type: IType;
  editTypeForm: FormGroup;

  constructor(private modalController: ModalController, private formBuilder: FormBuilder, private typeManageService: TypeManageService) { }

  ngOnInit() {
    //TODO: call product by typeId
    this.typeManageService.getTypeById().subscribe((res: IType) => {
      this.type = res;

      this.editTypeForm = this.formBuilder.group({
        name: [this.type.name, [Validators.required]],
      })
    })
  }

  onConfirm() {
    if (this.editTypeForm.valid) {
      let data: IType = {
        typeId: this.typeId,
        name: this.editTypeForm.value.name,
      }
      //TODO: call api with edited type (update)
      this.onDismiss()
    }
  }

  onDismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
