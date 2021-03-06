import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {


  onlineshow:boolean = false;
  topic:any;
  from_date:any;
  to_date:any;
  seats:any;
  locality:any;
  description:any;
  online:any;
  time:any;
  base64textString: string;
  
  constructor(private newService: CommonService,private router: Router ) { }
  Repdata;
  valbutton = 'Save';
  tutorname:any;
  currentDate = Date.now(); 
  
  ngOnInit() {
    this.tutorname = this.newService.getobjectemail();
  }
  
  selectFile(event){
    var files = event.target.files;
    var file = files[0];

  if (files && file) {
      var reader = new FileReader();

      reader.onload =this.handleFile.bind(this);

      reader.readAsBinaryString(file);
  }
}



handleFile(event) {
   var binaryString = event.target.result;
          this.base64textString= btoa(binaryString);
          console.log(btoa(binaryString));
  }

  onSave = function (user) {
    user.mode = this.valbutton;
    user.imageInput = this.base64textString;
    user.tutorname = this.tutorname;
    console.log(user);
    this.newService.saveUser_session(user)
      .subscribe(data => {
        alert(data.data);
        this.router.navigate(["tutorProfile"]);
        this.ngOnInit();
      }
        , error => this.errorMessage = error)

  }
  show(){
    this.onlineshow = true;
  }

}
