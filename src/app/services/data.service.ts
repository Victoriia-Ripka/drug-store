import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataUrl = 'assets/data/products.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get<any[]>(this.dataUrl).pipe(
      map(products => products.filter(product => product.id == id))
    );
  }
}
