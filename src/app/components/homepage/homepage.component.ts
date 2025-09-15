import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from "../footer/footer.component";
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterModule, HeaderComponent, ButtonComponent, FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

}
