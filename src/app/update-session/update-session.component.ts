import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-session',
  templateUrl: './update-session.component.html',
  styleUrls: ['./update-session.component.css']
})
export class UpdateSessionComponent implements OnInit {

  session: any;
  data:any;
  onlineshow:boolean = false;
  errorMessage: any;
  valbutton = "Update";
  currentDate = new Date();
  constructor(private newService: CommonService,private router:Router) { }

  ngOnInit(): void {
    this.session = this.newService.getobjectsession();
  }
  update(){
    this.data = {
      id:this.session._id,
      tutorname:this.session.tutorname,
      topic:this.session.topic,
      locality:this.session.locality,
      from_date:this.session.from_date,
      to_date:this.session.to_date,
      time:this.session.time,
      description:this.session.description,
      seats:this.session.seats,
      online:this.session.online
    }
    this.newService.UpdateUser_session(this.data)
    .subscribe(data => {
      alert(data.data);
      this.router.navigate(["tutorProfile"]);
      this.ngOnInit();
    }
      , error => this.errorMessage = error)

  }


}
