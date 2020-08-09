import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { CommonService } from '../../services/common.service';
import { NetworkService } from '../../services/network.service';
import { AuthService } from '../../services/auth-service/auth-service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  email:any;
  password:any;
  public type = 'password'; 
  public showPass = false;

  constructor(public navctrl:NavController,
    public api:ApiService,public common:CommonService,public net:NetworkService,public auth:AuthService ) { }

  ngOnInit() {
    
  }
  login(){
   if (this.net.netFlag) {
      if (this.email ==null || this.email == undefined) {
        this.common.showAlert("Please Enter Valid Email No.!");
        return;
      }
      if (this.password == undefined || this.password == null) {
        this.common.showAlert("Please Enter Password.!")
      } else {
        this.common.showLoading();
         const param = {
           email: this.email,
           password: this.password
         }
         console.log(param)
        this.api.post('login', param).subscribe((data: any) => {
          this.common.dismissLoading();
          console.log(data)
          if (data.status != 1) {
         this.common.dismissLoading();
         this.common.showToast(data.message);
            return;
          }
          if (data.status == 1) {
            this.auth.setSecureToken(data.data);
            this.navctrl.navigateRoot('home');
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
  signup(){
    this.navctrl.navigateRoot('signup');
  }
  forgotpassword(){
    this.navctrl.navigateRoot('forgotpassword');
  }
  showPassword() {
    this.showPass = !this.showPass;
          if(this.showPass){
              this.type = 'text';
               } else {
         this.type = 'password';
       }
     }
}
