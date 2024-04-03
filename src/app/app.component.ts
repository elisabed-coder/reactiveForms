import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isUnchanged = false;
  fullName = 'Elisabed Bezhiashvili';
  isError = false;
  email = '';
  showHeader = false;
  // onClick() {
  //   this.isUnchanged = !this.isUnchanged;
  //   this.email = 'eb@gmail.com';
  // }

  // onUserType(event: any) {
  //   console.log('onUserType', event);
  //   if (event.target.value.length < 5) {
  //     this.isError = true;
  //   } else {
  //     this.isError = false;
  //   }
  // }

  // onKeyPress(event: any) {
  //   console.log('onkeypress', event);
  // }
  // onKeyUp(event: any) {
  //   console.log('onkeyUp', event);
  // }

  // onBlur(event: any) {
  //   console.log('onblur', event);
  // }
  phone = '';
  phoneNumber = '';
  // onClick(phone: string) {
  //   this.phoneNumber = phone;
  // }
  //  lifecycle Hooks ვაკონტროლოთ კომპონენტი, როდის შეიქნმას, შეიცვალოს
  ngOnInit() {
    console.log('App component is created');
  }

  onClick() {
    this.showHeader = !this.showHeader;
  }
}
