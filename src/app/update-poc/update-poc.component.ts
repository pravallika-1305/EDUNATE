import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-poc',
  templateUrl: './update-poc.component.html',
  styleUrls: ['./update-poc.component.css']
})
export class UpdatePocComponent implements OnInit {

  Repdata1: any;
  data:any;
  valbutton = "Update";
  errorMessage: any;
  constructor(private newService: CommonService,private router:Router) { }

  ngOnInit(): void {
    this.Repdata1 = this.newService.getobjectpoc();
  }
  
  Update(){
    this.data = {
      id:this.Repdata1._id,
      username:this.Repdata1.username,
      email:this.Repdata1.email,
      password:this.Repdata1.password,
      organization:this.Repdata1.organization,
    }
    this.newService.UpdateUser_poc(this.data)
      .subscribe(data => {
        alert(data.data);
        this.router.navigate(["displayAll"])
        this.ngOnInit();
      }
        , error => this.errorMessage = error)

  }


}
