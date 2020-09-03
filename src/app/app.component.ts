import { Component,OnInit} from '@angular/core';
import { CommonService } from './common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'edunate';
  constructor(public newService: CommonService,private router:Router){}

  ngOnInit(){
    this.newService.setLoginnavbar();

  }
  navigateLogin() {
    this.router.navigate(["login"]);
  }
  navigateLogout() {
    this.newService.setLoginnavbar();
    this.router.navigate(["login"]);
  }
  navigateContact() {
    this.router.navigate(["contactus"]);
  }
  navigateHome() {
    this.router.navigate(["home"]);
  }
  navigateEnrolledSessions() {
    this.router.navigate(["displayMyCart"]);
  }
  navigateSearch() {
    this.router.navigate(["displayAll"]);
  }
  navigateTutorProfile() {
    this.router.navigate(["tutorProfile"]);
  }
  navigateAbout(){
    this.router.navigate(["about"])
  }
}
