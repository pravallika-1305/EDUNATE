import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutor-register',
  templateUrl: './tutor-register.component.html',
  styleUrls: ['./tutor-register.component.css']
})
export class TutorRegisterComponent implements OnInit {
  base64textString: string;

  constructor(private newService: CommonService,private router:Router) { }
  Repdata;
  valbutton = 'Save';
  fullname:any;
  username:any;
  password:any;
  twitter:any;
  linkedin:any;
  blog:any;
  email:any;


  ngOnInit() {
    this.newService.GetUser_tutor().subscribe(data => this.Repdata = data);
    this.newService.setLoginnavbar();
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
    this.newService.saveUser_tutor(user)
      .subscribe(data => {
        alert(data.data);
        this.router.navigate(['login']);
        this.ngOnInit();
      }
        , error => this.errorMessage = error)

  }
}