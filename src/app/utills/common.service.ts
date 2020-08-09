import { Injectable } from '@angular/core';
import { AlertController, ToastController, LoadingController, NavController, Platform } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class CommonService {

  loading: any;
  version: any = 10204;
  versionCode: any = 10204;
  userId: any = '';
  qrBack: any = false;
  id: any;
  userData: any = [];
  deviceName: any = '';
  deviceOs: any = '';
  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public navCtrl: NavController,
    public platform: Platform,
  ) {
   
  }

  
  async showAlert(msg) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  async showLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await this.loading.present();
  }

  
  logout() {
    localStorage.clear();
    localStorage.removeItem('userData');
    this.navCtrl.navigateRoot('login');
  }

}