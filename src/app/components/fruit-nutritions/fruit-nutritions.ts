import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from '../../service/http-service';
import { Fruit } from '../../models/interface';
import { Button } from "../button/button";


@Component({
  selector: 'app-fruit-nutritions',
  standalone: true,
  imports: [CommonModule, MatTableModule, RouterModule, RouterLink, MatIconModule, Button],
  templateUrl: './fruit-nutritions.html',
  styleUrls: ['./fruit-nutritions.css']
})
export class FruitNutritions implements OnInit, OnDestroy {
  
  fruit?: Fruit;
  errorMessage = '';

  private subscription?: Subscription;

  constructor(private route: ActivatedRoute, private httpService: HttpService) {}

 ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.subscription = this.httpService.getSingleFruit(name).subscribe({
        next: (data: Fruit) => {
          this.fruit = data;
          console.log('Frutto caricato:', this.fruit);
        },
        error: (err) => {
          console.error('Errore nel caricamento frutto:', err);
          this.errorMessage = 'Impossibile caricare i dati nutrizionali.';
        },
        complete: () => {
          console.log('Completato caricamento dati nutrizionali.');
        }
      });
    } else {
      this.errorMessage = 'Nessun frutto specificato.';
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}