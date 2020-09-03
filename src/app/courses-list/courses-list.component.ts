import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  Repdata: any;

  constructor(private newService: CommonService) { }

  ngOnInit(): void {
    this.newService.GetUser_session().subscribe(data=> this.Repdata = data);
  }

}

