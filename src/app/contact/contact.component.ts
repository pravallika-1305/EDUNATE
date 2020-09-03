import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormControl, Validators } from "@angular/forms";
import { google } from '@google/maps';

declare const google;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit{

loading = false;
buttonText = "Submit";
  name: any;
  email: any;
  message: any;

/*emailFormControl = new FormControl("", [
  Validators.required,
  Validators.email
]);

nameFormControl = new FormControl("", [
  Validators.required,
  Validators.minLength(4)
]);
messageFormControl = new FormControl("", [
  Validators.required
]);*/

 /* getErrorMessage() {
    if (this.emailFormControl.hasError('required')) {
      return 'You must enter a value';
    }

    return this.emailFormControl.hasError('emailFormControl') ? 'Not a valid email' : '';
  }*/
  constructor(public contactService: ContactService ) { }

  ngOnInit(): void {
  }
  register() {
    this.loading = true;
    this.buttonText = "Sending...";
    let user = {
      name: this.name,
      email: this.email,
      message: this.message
    }

    this.contactService.sendEmailVolunteers("http://localhost:3000/sendmailv", user).subscribe(
      data => {
        let res:any = data; 
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name}s details are sent successfully, the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttonText = "Send";
      },() => {
        this.loading = false;
        this.buttonText = "Send";
      }
    );
}
title = 'angular-gmap';
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 17.526449;
  lng =  78.371545;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
    this.marker.setMap(this.map);
  }
}


