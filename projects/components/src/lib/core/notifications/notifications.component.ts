import { Component, Input, OnInit } from '@angular/core';

interface Notification {
  title: string;
  progress: number;
}

@Component({
  selector: 'lib-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  constructor() {}

  @Input() notifications: Notification[];

  ngOnInit(): void {
  }
}
