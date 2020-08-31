import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(public contactService: HttpClient) { }

  sendEmailVolunteers(url, data) {
    return this.contactService.post(url, data);
  }
}
