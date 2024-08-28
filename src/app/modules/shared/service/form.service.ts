import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  public formConditions:WritableSignal<any> = signal({
    "showForm" : false,
    "isFilter" : false,
    "isSearch" : false,
    "isAdd":false
  });

  constructor() { }
}
