import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
declare var jQuery: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Repdata: any;
  Repdata1: any;
  email:any;
  password:any;
  valbutton = 'Login';
  objectId:any;
  constructor(private newService: CommonService,private router: Router) { }

  ngOnInit(): void {
    this.newService.GetUser_tutor().subscribe(data => this.Repdata = data);
    this.newService.GetUser_poc().subscribe(data => this.Repdata1 = data);
    this.newService.setLoginnavbar();
  }
  login(){
    var count = 0;
    var count1 = 0;
    var count2  = 0;
    for(let index = 0;index < this.Repdata.length;index ++){
      if(this.email == this.Repdata[index].email && this.password == this.Repdata[index].password){
        count = count + 1;
        count1 = count1  + 1;
        this.newService.sendobjecttutor(this.Repdata[index]);
        this.newService.sendobjectemail(this.Repdata[index].fullname);
        
      }

    }
    for(let index = 0;index < this.Repdata1.length;index ++){
      if(this.email == this.Repdata1[index].email && this.password == this.Repdata1[index].password){
        count = count + 1;
        count2 = count2 + 1;
        this.newService.sendobjectpoc(this.Repdata1[index]);
        this.newService.sendobjectemail(this.Repdata1[index].username);
        this.newService.sendobjectpocemail(this.Repdata1[index].email);
        
      }
    }
    /*if(count === 2){
      jQuery('#empModel').modal('show');
    }*/
    if(count1 === 1){
      this.router.navigate(['tutorProfile']);
    }
    if(count2 === 1){
      this.router.navigate(['displayAll']);
    }
    if(count === 0){
      alert('Invalid');
    }
  }
  /*Poc(){
    this.router.navigate(['displayall']);
  }*/
  /*Tutor(){
    this.router.navigate(['updatetutor']);
  }*/
  forgot(){
    this.router.navigate(['forgot']);
  }
  navigatePoc(){
    this.router.navigate(['pocRegister']);
  }
  navigateTutor(){
    this.router.navigate(['tutorRegister']);
  }
  showChoice(){
    jQuery('#empModel').modal('show');
  }
}