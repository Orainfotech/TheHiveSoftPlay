import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { CommonService } from '../../services/common.service';
import { NetworkService } from '../../services/network.service';
import { AuthService } from '../../services/auth-service/auth-service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

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
  public loginForm: FormGroup;
  public validation_messages: any;

  constructor(public navctrl:NavController,
    public api:ApiService,
    public common:CommonService,
    public net:NetworkService,
    public formbuilder:FormBuilder) { 

      this.formValidation();
    }

  ngOnInit() {
  }
  formValidation = (): void => {
    this.loginForm = this.formbuilder.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25)
    ])],
        email: ['', Validators.compose([
            Validators.required,
            Validators.email,
            //.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])],
        password: ['', Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(16),
         // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
        ])],
        confirmpassword: ['', Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(16),
         // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
        ])],
    });

    this.validation_messages = {
      'name': [
        { type: 'required', message: 'Name is required.' },
        { type: 'minlength', message: 'Name must be atleast 3 characters long.' },
        { type: 'maxlength', message: 'Name must be less then 25 characters.' },
      ],
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
        'confirmpassword': [
          { type: 'required', message: 'confirmpassword is required.' },
          { type: 'minlength', message: 'confirmpassword must be at least 6 characters long.' },
          { type: 'maxlength', message: 'confirmpassword must be maximum 16 characters long.' },
          { type: 'patten', message: 'Your confirmpassword must contain at least one uppercase one lowercase and one number.' },

      ],
    }
  }

  signin(){
    this.navctrl.navigateRoot('signin');
  }
  signup(){
    if (this.net.netFlag) {
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
     //}
   } else {
     this.common.dismissLoading();
     this.common.showAlert('Please connect internet!');
   }


  }
}
