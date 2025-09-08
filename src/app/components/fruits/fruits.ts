import { HttpService } from '../../service/http-service';
import { FruitCard } from "../fruit-card/fruit-card";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule, RouterLink }  from '@angular/router';
import { Fruit } from '../../models/interface';
import { Button } from '../button/button';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [FruitCard, CommonModule, FormsModule, MatIconModule, RouterModule, RouterLink, Button],
  templateUrl: './fruits.html',
  styleUrls: ['./fruits.css']
})
export class Fruits implements OnInit, OnDestroy{


searchTerm: string = '';
displayedFruit: Fruit[] = [];

private subscription?: Subscription;
errorMessage = '';

fruits: Fruit[] = [];
fruitName!:string;
fruitId!:number;
fruitDetails: { [id:number]: Fruit } = {}; // mappa fruitName

constructor(private httpService:HttpService) {}

ngOnInit() {
  this.subscription = this.httpService.getAllFruits().subscribe({
    next: (data: Fruit[]) => {
      this.fruits = data;
      this.displayedFruit = [...this.fruits]; // <- qui! serve per visualizzare i frutti
      console.log('Frutti caricati:', this.fruits);
    },
    error: (err) => {
      console.error('Errore nel caricamento frutti:', err);
      this.errorMessage = 'Impossibile caricare i frutti. Riprova più tardi.';
    },
    complete: () => {
      console.log('Completato il caricamento frutti.');
    }
  });
}
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }



  viewDetails(fruitId:number) {
    this.httpService.getSingleFruit(fruitId).subscribe((response:Fruit) => {
      console.log("Frutto scelto:", fruitId);
      console.log("response", response);
      this.fruitDetails[fruitId] = response; 
      console.log("Dettagli del frutto:", this.fruitDetails[fruitId]);
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
  trackById(index: number, fruit: Fruit): number {
    return fruit.id;
  }
}
