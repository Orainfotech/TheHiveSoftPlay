import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { CommonService } from '../../services/common.service';
import { NetworkService } from '../../services/network.service';
import {  FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  email:any;
  public loginForm: FormGroup;
  public validation_messages: any;

  constructor(public navctrl:NavController,
    public api:ApiService,
    public common:CommonService,
    public net:NetworkService,
    public formbuilder:FormBuilder) {
      this.formValidation();
   }

formValidation = (): void => {
  this.loginForm = this.formbuilder.group({
    
      email: ['', Validators.compose([
          Validators.required,
          Validators.email,
      ])]
  });

  this.validation_messages = {
    
      'email': [
          { type: 'required', message: 'Email is required.' },
          { type: 'email', message: 'Please enter valid email.' },
          { type: 'patten', message: 'Please enter valid email.' },
        ],
      
  }
}
  ngOnInit() {
  }
  Forgotpassword(){
    if (this.net.netFlag) {
     
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
     
   } else {
     this.common.dismissLoading();
     this.common.showAlert('Please connect internet!');
   }

  }
  signin(){
     this.navctrl.navigateRoot("signin");
  }
}
