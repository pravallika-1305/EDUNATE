import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-tutor-profile',
  templateUrl: './tutor-profile.component.html',
  styleUrls: ['./tutor-profile.component.css']
})
export class TutorProfileComponent implements OnInit {
  Repdata: any;
  term = this.newService.getobjectemail();
  sessions: any;
  valbutton = "Update";

  constructor(private newService: CommonService,private router:Router) { }

  ngOnInit(): void {
    this.Repdata = this.newService.getobjecttutor();
    this.newService.GetUser_session().subscribe(data => this.sessions = data);
    this.newService.setTutornavbar();
  }

  delete = function (id) {
    this.newService.deleteUser(id)
      .subscribe(data => { alert(data.data); this.ngOnInit(); }, error => this.errorMessage = error)
  }

  update(session){
    this.newService.sendobjectsession(session);
    this.router.navigate(['updateSession']);
  }

  edit() {
    this.router.navigate(["updateTutor"]);
  }
  createSession() {
    this.router.navigate(["createSession"]);
  }
  viewEnrollmentList(session) {
    this.newService.sendobjectsessionid(session._id);
    this.newService.sendSessionDetails(session.online);
    this.newService.sendSessionfrom_date(session.from_date);
    this.router.navigate(["enrollmentList"]);
  }

}
