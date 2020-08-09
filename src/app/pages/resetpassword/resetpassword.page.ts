import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { CommonService } from '../../services/common.service';
import { NetworkService } from '../../services/network.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {
  email:any;
  password:any;
  confirmpassword:any;
  code:any;
  
  constructor(public navctrl:NavController,
    public api:ApiService,public common:CommonService,public net:NetworkService ) { }

  ngOnInit() {
  }
  Changepassword(){
    if (this.net.netFlag) {
      if (this.email ==null || this.email == undefined) {
        this.common.showAlert("Please Enter Valid Email Id.!");
        return;
      }
      if (this.code == undefined || this.code == null) {
        this.common.showAlert("Please Enter Code.!")
      }
      if (this.password == undefined || this.password == null) {
        this.common.showAlert("Please Enter Password.!")
      }
      if (this.confirmpassword == undefined || this.confirmpassword == null) {
        this.common.showAlert("Please Enter Confirm Password.!")
      }
      if(this.password != this.confirmpassword){
        this.common.showAlert("Password and Confirm Password must be same.!")
      }
       else {
        this.common.showLoading();
         const param = {
           email: this.email,
           code: this.code,
           password:this.password,
           password_confirmation:this.confirmpassword
         }
         console.log(param)
        this.api.post('reset', param).subscribe((data: any) => {
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

