import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {
  name:any;
  email:any;
  subject:any;
  Message:any;
  public loginForm: FormGroup;
  public validation_messages: any;

  constructor(public navctrl:NavController,
    public formbuilder:FormBuilder) {
        this.formValidation();
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
        subject: ['', Validators.compose([
          Validators.required,
         ])],
        Message: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(500),
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
          'subject': [
            { type: 'required', message: 'Subject is required.' },
          ],
          'Message': [
            { type: 'required', message: 'Message is required.' },
            { type: 'maxlength', message: 'Name must be less then 500 characters.' },
           
          ],
        
    }
  }

  ngOnInit() {
  }
  contactus(){
    this.navctrl.navigateRoot('home');

  }
}
