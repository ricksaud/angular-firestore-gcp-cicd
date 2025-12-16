import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class CreateAdPage {
  title = '';
  price: number | null = null;
  location = '';
  bedrooms: number | null = null;
  bathrooms: number | null = null;
  description = '';

  constructor(
    private firestore: Firestore,
    private auth: Auth,
    private router: Router
  ) {}

  async createAd() {
    try {
      const user = this.auth.currentUser;
      if (!user) {
        alert('You must be logged in to create an ad.');
        return;
      }

      const adsCollection = collection(this.firestore, 'ads');
      await addDoc(adsCollection, {
        title: this.title,
        price: this.price,
        location: this.location,
        bedrooms: this.bedrooms,
        bathrooms: this.bathrooms,
        description: this.description,
        userId: user.uid,
        createdAt: new Date(),
      });

      alert('Ad created successfully!');
      this.router.navigate(['/']); // Navigate to Ads List
    } catch (error) {
      console.error('Error creating ad:', error);
      alert('Failed to create ad.');
    }
  }
}
