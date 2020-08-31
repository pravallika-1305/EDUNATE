import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutor-register',
  templateUrl: './tutor-register.component.html',
  styleUrls: ['./tutor-register.component.css']
})
export class TutorRegisterComponent implements OnInit {

  constructor(private newService: CommonService,private router:Router) { }
  Repdata;
  valbutton = 'Save';
  fullname:any;
  username:any;
  password:any;
  twitter:any;
  linkedin:any;
  blog:any;
  email:any;


  ngOnInit() {
    this.newService.GetUser_tutor().subscribe(data => this.Repdata = data);
    this.newService.setLoginnavbar();
  }

  onSave = function (user) {
    user.mode = this.valbutton;
    this.newService.saveUser_tutor(user)
      .subscribe(data => {
        alert(data.data);
        this.router.navigate(['login']);
        this.ngOnInit();
      }
        , error => this.errorMessage = error)

  }
}