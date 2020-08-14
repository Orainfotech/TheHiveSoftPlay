import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { NetworkService } from 'src/app/services/network.service';
import { CommonService } from 'src/app/services/common.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {
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
        'password': [
            { type: 'required', message: 'Password is required.' },
            { type: 'minlength', message: 'Password must be at least 6 characters long.' },
            { type: 'maxlength', message: 'Password must be maximum 16 characters long.' },

        ],
        'confirmpassword': [
          { type: 'required', message: 'confirmpassword is required.' },
          { type: 'minlength', message: 'confirmpassword must be at least 6 characters long.' },
          { type: 'maxlength', message: 'confirmpassword must be maximum 16 characters long.' },

      ],
    }
  }

  Changepassword(){
    this.navctrl.navigateRoot('home')
  //   if (this.net.netFlag) {
  //       this.common.showLoading();
  //        const param = {
  //          email: this.email,
  //          password:this.password,
  //          password_confirmation:this.confirmpassword
  //        }
  //        console.log(param)
  //       this.api.post('reset', param).subscribe((data: any) => {
  //         this.common.dismissLoading();
  //         console.log(data)
  //         if (data.status != 1) {
  //        this.common.dismissLoading();
  //        this.common.showToast(data.message);
  //           return;
  //         }
  //         if (data.status == 1) {
  //           this.navctrl.navigateRoot('signin');
  //         } else {
  //         }
  //       }, error => {
  //        this.common.dismissLoading();
  //         })
     
  //  } else {
  //    this.common.dismissLoading();
  //    this.common.showAlert('Please connect internet!');
  //  }

  }
  
}

