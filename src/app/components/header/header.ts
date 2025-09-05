import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { Button } from '../button/button';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [CommonModule, RouterModule, RouterLink, Button],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {

}
