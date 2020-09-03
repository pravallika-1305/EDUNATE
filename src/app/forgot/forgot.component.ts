import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  loading: boolean;
  buttonText: string;
  Repdata: any;
  Repdata1: any;
  objectId: any;
  forgot_email: any;

  constructor(private newService: CommonService,public contactService: ContactService,private router:Router) { }

  ngOnInit(): void {
    this.newService.GetUser_tutor().subscribe(data => this.Repdata = data)
    this.newService.GetUser_poc().subscribe(data => this.Repdata1 = data)
    
  }
  forgot(){
    var count = 0;
    for(let index = 0;index < this.Repdata.length;index ++){
      if(this.forgot_email == this.Repdata[index].email){
        this.objectId = this.Repdata[index]._id;
        count = count + 1;
        this.loading = true;
    this.buttonText = "Submiting...";
    let user = {
      name: this.Repdata[index].fullname,
      email: this.Repdata[index].email,
      message: this.Repdata[index]._id
    }
    this.newService.sendobjectforgotId(this.Repdata[index]._id);
    this.newService.sendobjectforgot(this.Repdata[index]);
  this.contactService.sendEmailVolunteers("http://localhost:3003/sendmailv", user).subscribe(
      data => {
        let res:any = data; 
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name}s details are sent successfully, the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttonText = "Submit";
      },() => {
        this.loading = false;
        this.buttonText = "Submit";
      }
    );
}
      this.router.navigate(['check']);
      }
    for(let index = 0;index < this.Repdata1.length;index ++){
      if(this.forgot_email == this.Repdata1[index].email){
        this.objectId = this.Repdata1[index]._id
        count = count + 1;
        this.loading = true;
    this.buttonText = "Submiting...";
    let user = {
      name: this.Repdata1[index].username,
      email: this.Repdata1[index].email,
      message: this.Repdata1[index]._id
    }
    this.newService.sendobjectforgot(this.Repdata1[index]);
    this.newService.sendobjectforgotId(this.Repdata1[index]._id);
    /*this.contactService.sendEmail("http://localhost:3000/sendmail", user).subscribe(
      data => {
        let res:any = data; 
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name} sent mail successfully, the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttonText = "Submit";
      },() => {
        this.loading = false;
        this.buttonText = "Submit";
      }
    );*/

  this.contactService.sendEmailVolunteers("http://localhost:3003/sendmailv", user).subscribe(
      data => {
        let res:any = data; 
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name}s details are sent successfully, the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttonText = "Submit";
      },() => {
        this.loading = false;
        this.buttonText = "Submit";
      }
    );

      }
    }
    if(count === 0){
      alert('Invalid');
    }
    if(count === 1){
      this.router.navigate(['check']);
    }
  }
  
  
}