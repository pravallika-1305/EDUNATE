import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-tutor',
  templateUrl: './update-tutor.component.html',
  styleUrls: ['./update-tutor.component.css']
})
export class UpdateTutorComponent implements OnInit {

  Repdata: any;
  valbutton = "Update";
  data:any;
  errorMessage: any;

  constructor(private newService: CommonService,private router:Router) { }

  ngOnInit(): void {
    this.Repdata = this.newService.getobjecttutor();
  }
  Update(){
    this.data = {
      id:this.Repdata._id,
      fullname:this.Repdata.fullname,
      username:this.Repdata.username,
      email:this.Repdata.email,
      password:this.Repdata.password,
      twitter:this.Repdata.twitter,
      linkedin:this.Repdata.linkedin,
      blog:this.Repdata.blog,
    }
    this.newService.UpdateUser_tutor(this.data)
      .subscribe(data => {
        alert(data.data);
        this.router.navigate(["tutorProfile"])
        this.ngOnInit();
      }
        , error => this.errorMessage = error)

  }

}
