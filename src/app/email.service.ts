import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { EmailConfig, SmtpMailerService } from 'smtp-mailer' ;

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  // constructor(private http:HttpClient ) { }

  // send expiry message
   constructor() { }

  // sendEmail(): void {
  //   const emailConfig: EmailConfig = {
  //     host: 'smtp.example.com',
  //     port: 587,
  //     secure: false,
  //     auth: {
  //       user: 'sender@example.com',
  //       pass: 'password'
  //     }
  //   };

  //   const mailOptions = {
  //     from: 'sender@example.com',
  //     to: 'recipient@example.com',
  //     subject: 'Hello from Angular SMTP',
  //     text: 'This is a test email sent from Angular using SMTP.'
  //   };

  //   this.smtpMailerService.sendMail(emailConfig, mailOptions)
  //     .then((result) => {
  //       console.log('Email sent successfully:', result);
  //     })
  //     .catch((error) => {
  //       console.error('Error sending email:', error);
  //     });
  // }


}
