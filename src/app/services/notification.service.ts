import { Injectable } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { FCM } from '@ionic-native/fcm/ngx';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  token: any = '';
  constructor(
    public fcm: FCM,
    public platform: Platform,
    public alertCtrl: AlertController
  ) {
    this.platform.ready().then(() => {
      this.fcm.getToken().then(token => {
        console.log('FCM Token => ', token);
      });
      this.fcm.onNotification().subscribe(notification => {
        const data = notification.additionalData;
        if (notification.wasTapped) {
          if (notification.title == 'youtube') {
            window.open(data.url, '_system');
          }
        } else {
          if (notification.title == 'youtube') {
            this.showAlert(notification.message, data.url);
          }
        };
      });

      this.fcm.onTokenRefresh().subscribe(token => {
        console.log('Token Refreshed => ', token);
        this.token=token;
      });
    });
  }

  subscribeToTopic(topic) {
    this.fcm.subscribeToTopic(topic);
  }

  unsubscribeToTopic(topic) {
    this.fcm.unsubscribeFromTopic(topic);
  }

  async showAlert(msg, url) {
    const alert = await this.alertCtrl.create({
      header: 'Notification',
      message: msg,
      buttons: [
        {
          text: 'Open',
          handler: () => {
            window.open(url, '_system');
          }
        }
      ]
    });

    await alert.present();
  }

}