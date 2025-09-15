import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';

import { FruitsComponent} from './components/fruits/fruits.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FruitNutritionsComponent } from './components/fruit-nutritions/fruit-nutritions.component';

    
export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/homepage'}, //percorso vuoto (localhost:4200/) reindirizza a homepage
    {path: 'homepage', component: HomepageComponent},
    {path: 'fruits', component: FruitsComponent},
    { path: 'fruits/:id', component: FruitNutritionsComponent},
    {path: '404', component: NotfoundComponent},
    {path: '**', redirectTo: '/404'},  //per qualsiasi altra rotta non definita, reindirizza a not found 404
];
