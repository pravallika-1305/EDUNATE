import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-enrollment-list',
  templateUrl: './enrollment-list.component.html',
  styleUrls: ['./enrollment-list.component.css']
})
export class EnrollmentListComponent implements OnInit {

  term = this.newService.getobjectsessionid();
  sessions: any;
  buttonDisable : boolean = true;
  serverdate : Date;
  dbdate = this.newService.getSessionfrom_date();
  online = this.newService.getSessionDetails();
  loading: boolean;
  buttonText: string;
  show: boolean = false;
  url ="https://meet.jit.si/" + this.online;
  
  constructor(private newService: CommonService,public contactService: ContactService,private router: Router) { }

  ngOnInit(): void {
    this.newService.GetUser_poccards().subscribe(data => this.sessions = data);

  this.serverdate = new Date();
  var dd= this.serverdate.getDate();
  var mm= this.serverdate.getMonth()+1;
  var yyyy = this.serverdate.getFullYear();
  console.log(this.serverdate.getMonth() + 1);
  var year = this.dbdate.substr(0,4);
  var month = this.dbdate.substr(5,6);
  var day  = this.dbdate.substr(8,9);
  var mon:any;
  var da:any;

  if(month[0] == "0") {
    mon = month[1];
  } else {
    mon = month;
  }
  if(day[0] == "0") {
    da = day[1];
  } else {
    da = day;
  }
 
  //var day= this.serverdate.getDay();
  //var hours = this.serverdate.getHours();
  //var minute = this.serverdate.getMinutes();
  
  if(mm==Number(mon) && dd==Number(da) && yyyy==Number(year))
  {
    this.buttonDisable = false;
    console.log('Achieve you want');
  }
  
  }

    send(){
      for(let index = 0;index < this.sessions.length;index ++){
        if (this.sessions[index].tutorname === this.newService.getobjectemail()){
          this.loading = true;
        this.buttonText = "Submiting...";
        let user = {
          name: this.sessions[index].username,
          email: this.sessions[index].email,
          message:  "https://meet.jit.si/" + this.online
        }
      this.contactService.sendEmailVolunteers("http://localhost:3001/sendmailv", user).subscribe(
          data => {
            let res:any = data; 
            console.log(
              `👏 > 👏 > 👏 > 👏 ${user.name}s details are sent successfully, the message id is ${res.messageId}`
            );
          },
          err => {
            console.log(err);
            this.loading = false;
            this.buttonText = "Submit";
          },() => {
            this.loading = false;
            this.buttonText = "Submit";
          }
        );
    }
          this.router.navigate(['video']);
          }
       
       
        
    
      
      }

      showLink() {
        this.show=true;
      }
  }

