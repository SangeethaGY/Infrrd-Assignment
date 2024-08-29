import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionComponent } from './main-section.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MainSectionComponent', () => {
  let component: MainSectionComponent;
  let fixture: ComponentFixture<MainSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainSectionComponent],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(MainSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
