import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-seats',
  templateUrl: './book-seats.component.html',
  styleUrls: ['./book-seats.component.css']
})
export class BookSeatsComponent implements OnInit {

  data: { pocname: any; topic: any; locality: any; from_date: any; to_date: any; time: any; description: any; seats: any; online: any;tutorname:any;orderedby:any };
  cardDetails:any;
  errorMessage: any;
  seats: any;
  actualseats:any;
  data1: {id:any,tutorname: any;topic: any; locality: any; from_date: any; to_date: any; time: any; description: any; seats: any; online: any;};
  noOfseats: any;
  constructor(private newService: CommonService,private router:Router) { }

  ngOnInit(): void {
    this.cardDetails = this.newService.getobjectcard();
    //this.actualseats = this.cardDetails.seats;
  }

  confirm(noOfseats){
    this.data = {
      pocname:this.newService.getobjectemail(),
      topic:this.cardDetails.topic,
      locality:this.cardDetails.locality,
      from_date:this.cardDetails.from_date,
      to_date:this.cardDetails.to_date,
      time:this.cardDetails.time,
      description:this.cardDetails.description,
      seats:this.noOfseats,
      online:this.cardDetails.online,
      tutorname:this.cardDetails.tutorname,
      orderedby:this.cardDetails._id
    }
    this.newService.AddtoCart(this.data)
    .subscribe(data => {
      alert(data.data);
      this.ngOnInit();
    }
      , error => this.errorMessage = error)
      this.data1 = {
        id:this.cardDetails._id,
        tutorname:this.cardDetails.tutorname,
        topic:this.cardDetails.topic,
        locality:this.cardDetails.locality,
        from_date:this.cardDetails.from_date,
        to_date:this.cardDetails.to_date,
        time:this.cardDetails.time,
        description:this.cardDetails.description,
        seats:this.cardDetails.seats - noOfseats,
        online:this.cardDetails.online
      }
      this.newService.UpdateUser_session(this.data1)
      .subscribe(data => {
        alert(data.data);
        console.log(this.data1);
        //this.ngOnInit();
        this.router.navigate(['displayMyCart']);
      }
        , error => this.errorMessage = error)
      
  }


}