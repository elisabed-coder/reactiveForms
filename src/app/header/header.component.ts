import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck, AfterViewInit {
  constructor() {}

  ngOnInit(): void {
    console.log('header component created');
  }

  ngDoCheck(): void {
    console.log('ng Do Ckeck');
  }

  ngAfterViewInit(): void {
    console.log('agetr viwe init');
  }
}
