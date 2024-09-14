import { Component,OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.css'
})
export class FruitsComponent implements OnInit {
  cardData: any[] = [];
  cart_product_ids: any[] = [];
  quantities: any[] = [];
  showSuccessPopup: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const access = sessionStorage.getItem("access");
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${access}`
    });

    this.http.get('http://127.0.0.1:8000/api/Product_Table/', { headers }).subscribe(
      (response: any) => {
        this.cardData = response;
        // Initialize each product's quantity to 1
        this.cardData.forEach(product => {
          product.quantity = 1;
        });
      },
      (error: any) => {
        console.error('Error when fetching data:', error);
      }
    );
  }

  updateQuantity(product: any, change: number) {
    if (product.quantity + change >= 1) {
      product.quantity += change;
    }
  }

  addToCart(product: any) {
    if (!this.cart_product_ids.includes(product.id)) {
      this.cart_product_ids.push(product.id);
      this.quantities.push(product.quantity);
    } else {
      // If product already in cart, update its quantity
      const index = this.cart_product_ids.indexOf(product.id);
      this.quantities[index] = product.quantity;
    }

    const payload = {
      cart_product_ids: this.cart_product_ids,
      quantities: this.quantities
    };
    const access = sessionStorage.getItem("access");
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${access}`
    });

    // Posting data to Django API
    this.http.patch('http://127.0.0.1:8000/api/users/get_user', payload, { headers })
      .subscribe(response => {
        this.showSuccessPopup = true;
        console.log("Product quantity updated:", response);
      }, error => {
        console.error("Error:", error);
      });
  }

  // Close the popup
  closePopup() {
    this.showSuccessPopup = false;
  }
}
