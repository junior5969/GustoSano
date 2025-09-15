import {ChangeDetectionStrategy, Component, Input, Output, EventEmitter} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Fruit } from '../../models/interface';
import { ButtonActionComponent} from "../button-action/button-action.component";

@Component({
  selector: 'app-fruit-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, RouterModule, RouterLink, ButtonActionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './fruit-card.component.html',
  styleUrls: ['./fruit-card.component.css']
})
export class FruitCardComponent {

@Input() fruit!: Fruit;
@Input() details?: Fruit;
@Output() fruitClicked = new EventEmitter<number>();


getFruitImage(fruitName: string | undefined): string {
  if (!fruitName) {
    return 'assets/default.jpg'; // fallback se non c'è il nome
  }
  return `assets/${fruitName}.jpg`;
}
}