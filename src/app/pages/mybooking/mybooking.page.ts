import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { CommonService } from '../../utills/common.service';
import { NetworkService } from '../../services/network.service';
import { AuthService } from '../../services/auth-service/auth-service';

@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.page.html',
  styleUrls: ['./mybooking.page.scss'],
})
export class MybookingPage implements OnInit {
  name:any;
  email:any;
  phone:any;
  AddMessage:any;
  redeemcode:any;
  noofchildren:any;
  constructor( public navctrl:NavController,
    public api:ApiService,
    public common:CommonService,
    public net:NetworkService,
    public auth:AuthService ) { }

  ngOnInit() {
  }

  booknow(){
      if (this.net.netFlag) {
        if (this.name ==null || this.name == undefined) {
          this.common.showAlert("Please Enter Name!");
          return;
        }
        if (this.email ==null || this.email == undefined) {
          this.common.showAlert("Please Enter Valid Email Id.!");
          return;
        }
        if (this.phone == undefined || this.phone == null) {
          this.common.showAlert("Please Enter Phone No.!")
          return;
        }
        if (this.noofchildren == undefined || this.noofchildren == null) {
          this.common.showAlert("Please Enter No of Children.!")
          return;
        }
        if (this.AddMessage == undefined || this.AddMessage == null) {
          this.common.showAlert("Please Enter Message.!")
          return;
        }
        if (this.redeemcode == undefined || this.redeemcode == null) {
          this.common.showAlert("Please Enter Redeem Code.!")
          return;
        }
         else {
        // const partyparam = { 
        //             "party_type": "4",
        //             "name": this.name,
        //             "email": this.email,
        //             "phone": this.phone,
        //             "children": this.noofchildren,
        //             "massage": this.AddMessage,
        //             "redeem_code": this.redeemcode
        //         }
        //     this.api.post('BookParty', partyparam).subscribe((data: any) => {
        //      console.log(data)
        //      if (data.status != 1) {
        //          this.common.showToast(data.msg);
        //        return;
        //      }
        //      if (data.status == 1) {
        //       this.navctrl.navigateRoot('home');
        //     } else {
        //        this.common.showAlert('Please Try again!');
        //      }
        //    }, error => {  
        //     this.common.showAlert('Please Try again!');
        //      });
        this.navctrl.navigateRoot('home');
            }
      } else {
        this.common.showAlert('Please connect internet!');
      }
  }
}
