import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { CommonService } from '../../services/common.service';
import { NetworkService } from '../../services/network.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  email:any;
  constructor(public navctrl:NavController,
    public api:ApiService,public common:CommonService,public net:NetworkService ) { }

  ngOnInit() {
  }
  Forgotpassword(){
    if (this.net.netFlag) {
      if (this.email ==null || this.email == undefined) {
        this.common.showAlert("Please Enter Valid Email Id.!");
        return;
      }
       else {
        this.common.showLoading();
         const param = {
           email: this.email,
         }
         console.log(param)
        this.api.post('forgot', param).subscribe((data: any) => {
          this.common.dismissLoading();
          console.log(data)
          if (data.status != 1) {
         this.common.dismissLoading();
         this.common.showToast(data.message);
            return;
          }
          if (data.status == 1) {
            this.navctrl.navigateRoot('resetpassword');
            this.common.showToast(data.message);

          } else {
          }
        }, error => {
         this.common.dismissLoading();
          })
     }
   } else {
     this.common.dismissLoading();
     this.common.showAlert('Please connect internet!');
   }

  }
  signin(){
     this.navctrl.navigateRoot("signin");
  }
}
