import { Component, AfterViewInit } from '@angular/core';
import 'src/vendor/jitsi/external_api.js'
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements AfterViewInit{
 
  title = 'jitsi';
  domain: string = "meet.jit.si";
  options:any;
  api:any;
constructor(private newService:CommonService,private router: Router){}
  ngAfterViewInit(): void {
    this.options = {
      roomName:this.newService.getSessionDetails(),
      width: 1000,
      height: 600,
      parentNode: document.querySelector('#meet')
    }
    this.api = new JitsiMeetExternalAPI(this.domain,this.options);
  }
  viewCertificate() {
    this.router.navigate(["certificate"]);
  }
}

