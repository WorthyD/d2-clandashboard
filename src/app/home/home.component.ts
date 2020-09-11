import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bgClass = `bg-${Math.floor(Math.random() * 3) + 1}`;
  constructor() {}

  ngOnInit(): void {}
}
