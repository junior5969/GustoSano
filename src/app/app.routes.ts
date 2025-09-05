import { Routes } from '@angular/router';
import { Homepage } from './components/homepage/homepage';

import { Fruits} from './components/fruits/fruits';
import { Notfound } from './components/notfound/notfound';
import { FruitNutritions } from './components/fruit-nutritions/fruit-nutritions';

    
export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/homepage'}, //percorso vuoto (localhost:4200/) reindirizza a homepage
    {path: 'homepage', component: Homepage},
    {path: 'fruits', component: Fruits},
    { path: 'fruits/:name', component: FruitNutritions},
    {path: '404', component: Notfound},
    {path: '**', redirectTo: '/404'},  //per qualsiasi altra rotta non definita, reindirizza a not found 404
];
