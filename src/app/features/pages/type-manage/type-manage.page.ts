import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddTypeComponent } from 'src/app/shared/components/add-type/add-type.component';
import { EditTypeComponent } from 'src/app/shared/components/edit-type/edit-type.component';
import { IType } from '../type-choice/interfaces/type-choice.interface';
import { TypeChoiceService } from '../type-choice/services/type-choice.service';

@Component({
  selector: 'app-type-manage',
  templateUrl: './type-manage.page.html',
  styleUrls: ['./type-manage.page.scss'],
})
export class TypeManagePage implements OnInit {
  newType: IType;
  typeChoiceList: IType[];

  constructor(private modalController: ModalController, private typeChoiceService: TypeChoiceService, private router: Router) { }

  ngOnInit() {
    this.getTypes();
  }

  getTypes() {
    this.typeChoiceService.getTypes().subscribe((res: IType[]) => {
      this.typeChoiceList = res;
    })
  }

  onTypeSelect() {
    this.router.navigate(["/product-manage"])
  }

  async onEdit(typeId: number) {
    const modal = await this.modalController.create({
      component: EditTypeComponent,
      cssClass: 'edit-type',
      componentProps: {
        typeId: typeId,
      },
    });
    return await modal.present();
  }

  onDelete() {
    console.log("Deleted")
  }

  async addType() {
    const modal = await this.modalController.create({
      component: AddTypeComponent,
      cssClass: 'add-type',
    });

    modal.onDidDismiss().then((data) => {
      this.newType = data['data'].newType;
      console.log(this.newType)
    });

    return await modal.present();
  }
}
