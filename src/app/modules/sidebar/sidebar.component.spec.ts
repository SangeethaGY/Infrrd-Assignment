import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SidebarComponent]
    });
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set fromService object on call of filterEmployee',() => {
    const formServiceSpy = spyOn(component['formService'].formConditions,'set');
    const obj = {
      "showForm" : true,
      "isFilter" : true,
      "isSearch" : false,
      "isAdd":false
    }
    component.filterEmployee();
    expect(formServiceSpy).toHaveBeenCalledWith(obj)
  });

  it('should set fromService object on call of searchEmployee',() => {
    const formServiceSpy = spyOn(component['formService'].formConditions,'set');
    const obj = {
      "showForm" : true,
      "isFilter" : false,
      "isSearch" : true,
      "isAdd":false
    }
    component.searchEmployee();
    expect(formServiceSpy).toHaveBeenCalledWith(obj)
  });

  it('should set fromService object on call of addEmployee',() => {
    const formServiceSpy = spyOn(component['formService'].formConditions,'set');
    const obj = {
      "showForm" : true,
      "isFilter" : false,
      "isSearch" : false,
      "isAdd":true
    }
    component.addEmployee();
    expect(formServiceSpy).toHaveBeenCalledWith(obj)
  });

  it('should set fromService object on call of viewEmployee',() => {
    const formServiceSpy = spyOn(component['formService'].formConditions,'set');
    const obj = {
      "showForm" : false,
      "isFilter" : false,
      "isSearch" : false,
      "isAdd":false
    }
    component.viewEmployee();
    expect(formServiceSpy).toHaveBeenCalledWith(obj)
  });

});
