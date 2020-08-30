import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poc-register',
  templateUrl: './poc-register.component.html',
  styleUrls: ['./poc-register.component.css']
})
export class PocRegisterComponent implements OnInit {

  constructor(private newService: CommonService,private router:Router) { }
  Repdata;
  valbutton = 'Save';
  organization:any;
  username:any;
  password:any;
  email:any;
  
  ngOnInit() {
    this.newService.GetUser_poc().subscribe(data => this.Repdata = data)
  }

  onSave = function (user) {
    user.mode = this.valbutton;
    this.newService.saveUser_poc(user)
      .subscribe(data => {
        alert(data.data);
        this.router.navigate(['login']);
        this.ngOnInit();
      }
        , error => this.errorMessage = error)

  }
}
