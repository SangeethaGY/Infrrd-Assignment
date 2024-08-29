import { Injectable, WritableSignal, signal } from '@angular/core';
import { FormConditions } from '../models/form-conditions.model';
@Injectable({
  providedIn: 'root'
})
export class FormService {

  public formConditions:WritableSignal<FormConditions> = signal({
    "showForm" : false,
    "isFilter" : false,
    "isSearch" : false,
    "isAdd":false
  });

  constructor() { }
}
