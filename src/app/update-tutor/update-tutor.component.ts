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
  base64textString: string;
  uploadimage: any;

  constructor(private newService: CommonService,private router:Router) { }

  ngOnInit(): void {
    this.Repdata = this.newService.getobjecttutor();
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
  
  Update(){
    if(this.base64textString === undefined){
      this.uploadimage = this.Repdata.imageInput;
    }
    else{
      this.uploadimage = this.base64textString;
    }
    this.data = {
      id:this.Repdata._id,
      fullname:this.Repdata.fullname,
      username:this.Repdata.username,
      email:this.Repdata.email,
      password:this.Repdata.password,
      imageInput:this.uploadimage,
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
