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
  viewEnrollmentList(id) {
    this.newService.sendobjectsessionid(id);
    this.router.navigate(["enrollmentList"]);
  }

}
