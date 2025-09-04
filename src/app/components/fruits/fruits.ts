import { HttpService } from '../../service/http-service';
import { FruitCard } from "../fruit-card/fruit-card";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule, RouterLink }  from '@angular/router';
import { Fruit } from '../../models/interface';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [FruitCard, CommonModule, FormsModule, MatIconModule, RouterModule, RouterLink ],
  templateUrl: './fruits.html',
  styleUrls: ['./fruits.css']
})
export class Fruits {

constructor(private httpService:HttpService) {}

searchTerm: string = '';
displayedFruit: Fruit[] = [];

fruits:Fruit[]=[];
fruitName!:string;
fruitDetails: { [name: string]: Fruit } = {}; // mappa fruitName

ngOnInit() {
  this.httpService.getAllFruits().subscribe((data: Fruit[]) => {
    this.fruits = data;
    this.displayedFruit = [...this.fruits]; // inizializzo subito la lista con un array copia di fruits ma indipendente
    console.log("Frutti caricati:", this.fruits);
  });
}

  viewDetails(fruitName: string) {
    this.httpService.getSingleFruit(fruitName).subscribe((response:Fruit) => {
      console.log("Frutto scelto:", fruitName);
      console.log("response", response);
      this.fruitDetails[fruitName] = response; 
      console.log("Dettagli del frutto:", this.fruitDetails[fruitName]);
    });
  }


searchedFruit(): void {
  if (!this.searchTerm.trim()) {
    this.displayedFruit = [...this.fruits]; // reset se la search è vuota
    return;
  }

  this.displayedFruit = this.fruits.filter(fruit =>
    fruit.name.toLowerCase().includes(this.searchTerm.toLowerCase())
  );

  console.log("Termine cercato:", this.searchTerm);
  console.log("Risultati:", this.displayedFruit);
}
}
