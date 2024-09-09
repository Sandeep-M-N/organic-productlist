import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
// import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = "http://172.17.7.104/api/Product_Table/";  // Replace with your Django API endpoint

  constructor() {}

  private getHeaders(): any {
    const token = sessionStorage.getItem('access');
    return {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  }

  getCardData(): Observable<any> {
    return from(axios.get(this.apiUrl, this.getHeaders()))
      .pipe(
        map(response => response.data),
        catchError(error => {
          console.error('Error fetching card data:', error);
          throw error;
        })
      );
  }
}
