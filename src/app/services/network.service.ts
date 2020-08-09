import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  netFlag: any = true;
  constructor(
    public network: Network,
    public platform: Platform,
    public common: CommonService
  ) {
    this.platform.ready().then(() => {
      this.network.onDisconnect().subscribe(() => {
        this.netFlag = false;
        this.common.showAlert('Please connect internet!');
      });

      // watch network for a connection
      this.network.onConnect().subscribe(() => {
        console.log('network connected!');
        this.netFlag = true;
      });

      if (this.network.type === 'none') {
        this.netFlag = false;
      }
    });
  }
}
