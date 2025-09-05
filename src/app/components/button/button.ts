import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone:true,
  imports: [CommonModule, RouterLink, RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './button.html',
  styleUrls: ['./button.css']
})
export class Button {

  @Input() label?: string;                       // Testo del bottone
  @Input() icon?: string;                        // Icona material 
  @Input() routerLink?: string | any[];     
  @Input() matStyle: 'basic' | 'raised' | 'flat' | 'icon' = 'basic'; // stile Angular Material
  @Input() ariaLabel?: string;                   // Accessibilità
  @Input() disabled = false;
  @Input() iconAriaHidden = true; 
  
  @Input() fontSize?: string;
  @Input() padding?: string;
  @Input() marginTop?: string;
  @Input() borderRadius?: string;
  @Input() customClass?: string = '';
}
