import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = environment.API_ENDPOINT + '/api/products';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any[]>(this.baseUrl);
  }

  create(product: any) {
    return this.http.post(this.baseUrl, product);
  }

  update(id: number, product: any) {
    return this.http.put(`${this.baseUrl}/${id}`, product);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}