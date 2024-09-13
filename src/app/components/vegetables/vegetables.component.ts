import { Component,OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrl: './vegetables.component.css'
})
export class VegetablesComponent  implements OnInit {
  cardData: any;
  product:any

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const access = sessionStorage.getItem("access");
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${access}`
    });
    this.http.get('http://172.17.7.104:8000/api/Product_Table/', { headers }).subscribe(
      (response: any) => {
        this.cardData=response;
        
        console.log('response:', this.cardData[0].P_Price);

      },
      (error: any) => {
        console.error('Error when fetching data:', error);
      }
    )
  
}

}
