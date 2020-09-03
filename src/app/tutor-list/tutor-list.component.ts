import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-tutor-list',
  templateUrl: './tutor-list.component.html',
  styleUrls: ['./tutor-list.component.css']
})
export class TutorListComponent implements OnInit {
  Repdata: any;

  constructor(private newService: CommonService) { }

  ngOnInit(): void {
    this.newService.GetUser_tutor().subscribe(data=> this.Repdata = data);
  }

}
