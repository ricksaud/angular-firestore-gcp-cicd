import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-ad-detail',
  templateUrl: './ad-detail.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class AdDetailPage implements OnInit {
  adId!: string;
  ad: any;

  sampleAds = [
    {
      id: '1',
      title: 'Luxury Villa',
      price: 500000,
      location: 'Sydney',
      bedrooms: 4,
      bathrooms: 3,
      description: 'Beautiful villa with pool.',
    },
    {
      id: '2',
      title: 'Modern Apartment',
      price: 350000,
      location: 'Melbourne',
      bedrooms: 2,
      bathrooms: 1,
      description: 'Apartment in the city center.',
    },
    {
      id: '3',
      title: 'Cozy Studio',
      price: 150000,
      location: 'Brisbane',
      bedrooms: 1,
      bathrooms: 1,
      description: 'Small but comfortable studio.',
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private firestore: Firestore,
    private auth: Auth
  ) {}

  ngOnInit() {
    this.adId = this.route.snapshot.paramMap.get('id')!;
    this.ad = this.sampleAds.find((a) => a.id === this.adId);
  }

  async scheduleViewing() {
    try {
      const user = this.auth.currentUser;
      if (!user) {
        alert('You must be logged in to schedule a viewing.');
        return;
      }

      const viewingsCollection = collection(this.firestore, 'viewings');
      await addDoc(viewingsCollection, {
        adId: this.adId,
        userId: user.uid,
        scheduledAt: new Date(), // You can later add a date picker
        createdAt: new Date(),
      });

      alert('Viewing scheduled successfully!');
    } catch (error) {
      console.error('Error scheduling viewing:', error);
      alert('Failed to schedule viewing.');
    }
  }
}
