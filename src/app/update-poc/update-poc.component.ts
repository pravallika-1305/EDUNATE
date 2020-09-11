import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-poc',
  templateUrl: './update-poc.component.html',
  styleUrls: ['./update-poc.component.css']
})
export class UpdatePocComponent implements OnInit {

  Repdata1: any;
  data:any;
  valbutton = "Update";
  errorMessage: any;
  base64textString: string;
  uploadimage: any;
  constructor(private newService: CommonService,private router:Router) { }

  ngOnInit(): void {
    this.Repdata1 = this.newService.getobjectpoc();
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
      this.uploadimage = this.Repdata1.imageInput;
    }
    else{
      this.uploadimage = this.base64textString;
    }
    this.data = {
      id:this.Repdata1._id,
      username:this.Repdata1.username,
      email:this.Repdata1.email,
      password:this.Repdata1.password,
      imageInput:this.uploadimage,
      organization:this.Repdata1.organization
    }
    this.newService.UpdateUser_poc(this.data)
      .subscribe(data => {
        alert(data.data);
        this.router.navigate(["displayAll"])
        this.ngOnInit();
      }
        , error => this.errorMessage = error)

  }


}
