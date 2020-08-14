import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { CommonService } from '../../services/common.service';
import { NetworkService } from '../../services/network.service';
import { AuthService } from '../../services/auth-service/auth-service';
import { NotificationService } from '../../services/notification.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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
  fcm_token:any;
  device_id:any;
  public loginForm: FormGroup;
  public validation_messages: any;

  constructor(public navctrl:NavController,
    public api:ApiService,public common:CommonService,public net:NetworkService,
    public auth:AuthService,public notification:NotificationService, public formbuilder:FormBuilder) { 
    
    }

  ngOnInit() {
    this.formValidation();
  }
  formValidation = (): void => {
    this.loginForm = this.formbuilder.group({
        email: ['', Validators.compose([
            Validators.required,
            Validators.email,
           // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])],
        password: ['', Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(16),
         // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
        ])],
    });

    this.validation_messages = {
        'email': [
            { type: 'required', message: 'Email is required.' },
            { type: 'email', message: 'Please enter valid email.' },
            { type: 'patten', message: 'Please enter valid email.' },
          ],
        'password': [
            { type: 'required', message: 'Password is required.' },
            { type: 'minlength', message: 'Password must be at least 6 characters long.' },
            { type: 'maxlength', message: 'Password must be maximum 16 characters long.' },
            { type: 'patten', message: 'Your Password must contain at least one uppercase one lowercase and one number.' },

        ],
    }
  }

  login(){
   if (this.net.netFlag) {
    if (!this.loginForm.errors) {
      this.common.showLoading();
      const param = {
        email: this.email,
        password: this.password,
        fcm_token:this.notification.token ? this.notification.token : 'demo',
        device_id:this.common.getUniqueId() ? this.common.getUniqueId(): 'demo' 
      }
      console.log(param);
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
