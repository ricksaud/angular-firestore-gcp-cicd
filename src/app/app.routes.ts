import { Routes } from '@angular/router';
import { AdsListPage } from './pages/ads-list/ads-list.page';

export const routes: Routes = [
  { path: '', redirectTo: 'ads', pathMatch: 'full' },
  { path: 'ads', component: AdsListPage },
  { path: 'ad/:id', component: AdDetailPage },
  { path: 'login', component: LoginPage },
  { path: 'create-ad', component: CreateAdPage },
];
