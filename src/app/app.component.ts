import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employee-management';
  public leftPanelClass = "col-4 col-md-2";
  public rightPanelClass = "col-8 col-md-10"
}
