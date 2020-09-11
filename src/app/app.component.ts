import { Component,OnInit} from '@angular/core';
import { CommonService } from './common.service';
import { Router } from '@angular/router';
declare var window: Window;

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
    (function(d, m){
      var kommunicateSettings = 
          {"appId":"7496c2bd4fee6734cf3daecfd87346ac","popupWidget":true,"automaticChatOpenOnNavigation":true};
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
  })(document,window.kommunicate || {});

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
  navigateChat(){
    this.router.navigate(["chatbot"])
  }
}
