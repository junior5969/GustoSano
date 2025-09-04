import {Component, Input} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../service/http-service';
import { RouterModule, RouterLink } from '@angular/router';
import { Fruit } from '../../models/interface'; 


@Component({
  selector: 'app-fruit-nutritions',
  standalone: true,
  imports: [CommonModule, MatTableModule,RouterModule, RouterLink, MatIconModule ],
  templateUrl: './fruit-nutritions.html',
  styleUrls: ['./fruit-nutritions.css']
})
export class FruitNutritions {
  
@Input() fruit?: Fruit;

  constructor(private route: ActivatedRoute, private httpService: HttpService) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.httpService.getSingleFruit(name).subscribe(data => {
        this.fruit = data;
        console.log(data);
      });
    }
  }
}