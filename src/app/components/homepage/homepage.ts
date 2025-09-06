import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Button } from "../button/button";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterModule, Header, Button, Footer],
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css']
})
export class Homepage {

}
