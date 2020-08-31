import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
}
