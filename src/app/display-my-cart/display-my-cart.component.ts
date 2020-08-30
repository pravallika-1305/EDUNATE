import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-my-cart',
  templateUrl: './display-my-cart.component.html',
  styleUrls: ['./display-my-cart.component.css']
})
export class DisplayMyCartComponent implements OnInit {

  term = this.newService.getobjectemail();
  sessions: any;
  constructor(private newService: CommonService,private router: Router) { }

  ngOnInit(): void {
    this.newService.GetUser_poccards().subscribe(data => this.sessions = data)
  }

}