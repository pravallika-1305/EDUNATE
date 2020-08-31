import { Component,OnInit} from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'edunate';
  constructor(public newService: CommonService){}

  ngOnInit(){
    this.newService.setLoginnavbar();

  }
}
