import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/service/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  data = {
    to: "",
    subject: "",
    message: ""
  }

  flag=false;
  constructor(private email: EmailService, private snack: MatSnackBar) {
  }
  ngOnInit(): void {
  }

  doSubmitForm() {

    this.flag=true;
    if (this.data.to === '' || this.data.subject == '' || this.data.message == '') {
      this.snack.open("Please provide all fields...", "Cancel")
      return
    }
    this.email.sendEmail(this.data).subscribe(
      response => {
        console.log(response)
        this.flag=false;
        this.snack.open("Email sent successfully...", "OK")
      },
      error => {
        console.log(error)
        this.flag=false;
        this.snack.open("Error occur while sending email...", "Ok")
      }
    )
  }
}
