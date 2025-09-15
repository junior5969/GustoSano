import { Component, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button-action',
  standalone:true,
  imports: [CommonModule, RouterModule, MatIcon, MatButtonModule, RouterLink ],
  templateUrl: './button-action.component.html',
  styleUrls: ['./button-action.component.css']
})
export class ButtonActionComponent {

  @Input() label?: string;
  @Input() icon?: string;
  @Input() routerLink?: string | any[];
  @Input() ariaLabel?: string;
  @Input() disabled = false;
  @Input() matStyle: 'basic' | 'raised' | 'flat' | 'icon' = 'basic';
  @Input() iconAriaHidden = true;
  @Input() customClass?: string = '';
 

  @Output() action = new EventEmitter<void>();
}

