import { Injectable , inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Fruit } from '../models/interface';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
public baseUrl:string=`${environment.apiUrl}/fruit`;


private http = inject(HttpClient);


getAllFruits(): Observable<Fruit[]> {
  return this.http.get<Fruit[]>(`${this.baseUrl}/all`);
}


getSingleFruit(id:number): Observable<Fruit> {
  return this.http.get<Fruit>(`${this.baseUrl}/${id}`);
}

}
