import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { CommonService } from '../../services/common.service';
import { NetworkService } from '../../services/network.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  public loginForm: FormGroup;
  public validation_messages: any;

  constructor(public navctrl:NavController,
    public api:ApiService,public common:CommonService,public net:NetworkService,
    public formbuilder:FormBuilder) { 

      this.formValidation();
    }
  ngOnInit() {
  }
  
  formValidation = (): void => {
    this.loginForm = this.formbuilder.group({
      
        email: ['', Validators.compose([
            Validators.required,
            Validators.email,
            //.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])],
        code:['',Validators.compose([
          Validators.required
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
        'email': [
            { type: 'required', message: 'Email is required.' },
            { type: 'email', message: 'Please enter valid email.' },
            { type: 'patten', message: 'Please enter valid email.' },
          ],
          'code': [
            { type: 'required', message: 'Code is required.' },
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
          { type: 'maxlength', message: 'confirmpassword must be at maximum 16 characters long.' },
          { type: 'patten', message: 'Your confirmpassword must contain at least one uppercase one lowercase and one number.' },

      ],
    }
  }
  Changepassword(){
    if (this.net.netFlag) {
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
     
   } else {
     this.common.dismissLoading();
     this.common.showAlert('Please connect internet!');
   }

  }
  
}

