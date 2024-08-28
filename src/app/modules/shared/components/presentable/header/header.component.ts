import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppConstants } from 'src/app/configs/constants';

@Component({
  selector: 'app-header',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public headerText:string = AppConstants.HEADER_TEXT;

}
