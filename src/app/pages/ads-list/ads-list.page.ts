import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.page.html',
  styleUrls: ['./ads-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
})
export class AdsListPage {
  sampleProperties = [
    {
      id: '1',
      title: 'Luxury Dublin Apartment',
      price: 450000,
      location: 'Dublin',
      image: 'assets/properties/luxury_dublin.jpg',
    },
    {
      id: '2',
      title: 'Cozy Cork House',
      price: 350000,
      location: 'Cork',
      image: 'assets/properties/cozy_cork.jpg',
    },
    {
      id: '3',
      title: 'Modern Limerick Villa',
      price: 600000,
      location: 'Limerick',
      image: 'assets/properties/modern_limerick.jpg',
    },
    {
      id: '4',
      title: 'Charming Galway Cottage',
      price: 320000,
      location: 'Galway',
      image: 'assets/properties/galway_cottage.jpg',
    },
    {
      id: '5',
      title: 'Spacious Belfast Townhouse',
      price: 480000,
      location: 'Belfast',
      image: 'assets/properties/belfast_townhouse.jpg',
    },
    {
      id: '6',
      title: 'Seaside Waterford Home',
      price: 400000,
      location: 'Waterford',
      image: 'assets/properties/waterford_home.jpg',
    },
    {
      id: '7',
      title: 'Elegant Kilkenny Mansion',
      price: 750000,
      location: 'Kilkenny',
      image: 'assets/properties/kilkenny_mansion.jpg',
    },
  ];
}
