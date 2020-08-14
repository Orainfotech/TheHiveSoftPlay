import { Injectable } from '@angular/core';
import { AlertController, ToastController, LoadingController, NavController, Platform } from '@ionic/angular';
import * as $ from 'jquery';
import { Device } from '@ionic-native/device/ngx';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  loading: any;
  userData: any = [];
  id: any;
  pattern:any="/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]*\.([a-z]{2,4})$/" ;

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public navCtrl: NavController,
    public platform: Platform,
    public device:Device
  ) {
    this.platform.ready().then(() => {
    });
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

  dismissLoading() {
    setTimeout(() => {
      if (this.loading) {
        this.loading.dismiss();
      }
    }, 100);
    $('ion-loading').remove();
  }
  getUniqueId() {
    this.id = this.device.uuid;
    if (this.device.uuid == '') {
      return 'not found';
    } else {
      return this.id;
    }
  }


}