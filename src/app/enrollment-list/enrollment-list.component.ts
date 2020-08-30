import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enrollment-list',
  templateUrl: './enrollment-list.component.html',
  styleUrls: ['./enrollment-list.component.css']
})
export class EnrollmentListComponent implements OnInit {

  term = this.newService.getobjectemail();
  sessions: any;
  constructor(private newService: CommonService,private router: Router) { }

  ngOnInit(): void {
    this.newService.GetUser_poccards().subscribe(data => this.sessions = data)
  }

}
