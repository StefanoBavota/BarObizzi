import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IType } from '../../type-choice/interfaces/type-choice.interface';

@Injectable({
  providedIn: 'root'
})
export class TypeManageService {

  constructor() { }

  getTypeById(): Observable<IType> {
    return of(
      {
        typeId: 1,
        name: "Caffetteria"
      }
    )
  }
}
