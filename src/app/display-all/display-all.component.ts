import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.css']
})
export class DisplayAllComponent implements OnInit {

  term:string;
  sessions:any;
  Repdata:any;
  data: any;
  errorMessage: any;

  constructor(private newService: CommonService,private router: Router) { }

  ngOnInit(): void {
    this.newService.GetUser_session().subscribe(data => this.sessions = data);
    this.Repdata = this.newService.getobjectpoc();
    console.log(this.Repdata);
    this.newService.setPocnavbar();
    
  }
  
  AddtoCart(session){
    this.newService.sendobjectcard(session);
    this.router.navigate(['bookSeats']);
  }
  edit(){
    this.router.navigate(["updatePoc"]);
  }

}
