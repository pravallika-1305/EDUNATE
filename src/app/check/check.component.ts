import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  show:boolean = false;
  forgot_object:any;
  Repdata: any;
  password:any;
  conpassword:any;
  data:any;
  errorMessage: any;
  constructor(private newService:CommonService,private router: Router) { }

  ngOnInit(): void {
    this.Repdata = this.newService.getobjectforgot();
    console.log(this.Repdata);
  }
  check(){
    if(this.Repdata._id === this.forgot_object){
      this.show = true;
    }
    else{
      alert('invalid');
    }
  }
  confirm(){
    var count = 0;
    console.log(Object.keys(this.Repdata).length);
    if(this.password === this.conpassword && Object.keys(this.Repdata).length === 5){
      this.data = {
        id:this.Repdata._id,
        username:this.Repdata.username,
        email:this.Repdata.email,
        password:this.password,
        organization:this.Repdata.organization
      }
      count = count + 1;
      this.newService.UpdateUser_poc(this.data)
        .subscribe(data => {
          alert(data.data);
          this.router.navigate(['login']);
          this.ngOnInit();
        }
          , error => this.errorMessage = error)
    }  
  if(this.password === this.conpassword && Object.keys(this.Repdata).length === 8){
      this.data = {
        id:this.Repdata._id,
        fullname:this.Repdata.fullname,
        username:this.Repdata.username,
        email:this.Repdata.email,
        password:this.password,
        twitter:this.Repdata.twitter,
        linkedin:this.Repdata.linkedin,
        blog:this.Repdata.blog,
      }
      count = count + 1;
      this.newService.UpdateUser_tutor(this.data)
        .subscribe(data => {
          alert(data.data);
          this.router.navigate(['login']);
          this.ngOnInit();
        }
          , error => this.errorMessage = error)
    }
    if(count === 0){
      alert('Invalid');
    }
  }
  
}