import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/shared/components/presentable/header/header.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { MainSectionComponent } from './modules/main-section/main-section.component';
import { EmployeeService } from './modules/shared/service/employee.service';
import { EmployeeCardComponent } from './modules/shared/components/actionable/employee-card/employee-card.component';
import { FormService } from './modules/shared/service/form.service';
import { EmployeeFormComponent } from './modules/shared/components/actionable/employee-form/employee-form.component';
@NgModule({
  declarations: [
    AppComponent,
    MainSectionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarComponent,
    HeaderComponent,
    EmployeeCardComponent,
    EmployeeFormComponent,
  ],
  providers: [EmployeeService, FormService],
  bootstrap: [AppComponent],
})
export class AppModule { }
