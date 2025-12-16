import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonicModule,
  AlertController,
  LoadingController,
} from '@ionic/angular';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
})
export class LoginPage {
  // Reactive login form
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {
    // Build form with validators
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  // -----------------------------
  // LOGIN FUNCTION
  // -----------------------------
  async login() {
    if (!this.loginForm.valid) {
      this.showAlert('Error', 'Please fill all fields correctly.');
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'Logging in...',
    });
    await loading.present();

    const { email, password } = this.loginForm.value;

    try {
      await this.auth.login(email, password); // Calls AuthService
      await loading.dismiss();

      // Navigate to property listings
      this.router.navigate(['/ads'], { replaceUrl: true });
    } catch (error: any) {
      await loading.dismiss();
      this.showAlert('Login Failed', error.message || 'Try again.');
    }
  }

  // -----------------------------
  // SHOW ALERT HELPER
  // -----------------------------
  async showAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
