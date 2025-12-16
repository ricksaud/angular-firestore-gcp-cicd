import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, CurrencyPipe],
})
export class AdsListPage {
  sampleAds = [
    {
      id: '1',
      title: 'Luxury Villa',
      price: 500000,
      location: 'Sydney',
      bedrooms: 4,
      bathrooms: 3,
      image: 'https://via.placeholder.com/600x400.png?text=Luxury+Villa',
    },
    {
      id: '2',
      title: 'Modern Apartment',
      price: 350000,
      location: 'Melbourne',
      bedrooms: 2,
      bathrooms: 1,
      image: 'https://via.placeholder.com/600x400.png?text=Modern+Apartment',
    },
    {
      id: '3',
      title: 'Cozy Studio',
      price: 150000,
      location: 'Brisbane',
      bedrooms: 1,
      bathrooms: 1,
      image: 'https://via.placeholder.com/600x400.png?text=Cozy+Studio',
    },
  ];
}
