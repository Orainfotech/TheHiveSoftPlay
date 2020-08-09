import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { CommonService } from '../../services/common.service';
import { NetworkService } from '../../services/network.service';
import { AuthService } from '../../services/auth-service/auth-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email:any;
  password:any;
  confirmpassword:any;
  name:any;
  constructor(public navctrl:NavController,
    public api:ApiService,public common:CommonService,public net:NetworkService) { }

  ngOnInit() {
  }
  signin(){
    this.navctrl.navigateRoot('signin');
  }
  signup(){
    if (this.net.netFlag) {
      if (this.name == undefined || this.name == null) {
        this.common.showAlert("Please Enter Name.!")
      }
      if (this.email ==null || this.email == undefined) {
        this.common.showAlert("Please Enter Valid Email Id.!");
        return;
      }
      if (this.password == undefined || this.password == null) {
        this.common.showAlert("Please Enter Password.!")
      }
      if (this.confirmpassword == undefined || this.confirmpassword == null) {
        this.common.showAlert("Please Enter Confirm Password.!")
      }
       else {
        this.common.showLoading();
         const param = {
           email: this.email,
           password: this.password,
           password_confirmation: this.confirmpassword,
           name: this.name
         }
         console.log(param)
        this.api.post('register', param).subscribe((data: any) => {
          this.common.dismissLoading();
          console.log(data)
          if (data.status != 1) {
         this.common.dismissLoading();
         this.common.showToast(data.message);
            return;
          }
          if (data.status == 1) {
            this.navctrl.navigateRoot('signin');

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
}
