import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-app-sunset',
  templateUrl: './app-sunset.component.html',
  styleUrls: ['./app-sunset.component.scss']
})
export class AppSunsetComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  localSeen = 'D2DD_Sunset_Seen';

  ngOnInit(): void {
    const x = localStorage.getItem(this.localSeen);
    if (x !== 'true') {
      setTimeout(() => {
        this.openDialog();
      }, 1000);
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AppSunsetDialog);

    dialogRef.afterClosed().subscribe((result) => {
      localStorage.setItem(this.localSeen, 'true');
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
    <h1 mat-dialog-title>Sunsetting Soon</h1>
    <div mat-dialog-content>
      <p>
        I've been working on a big rework of the app with multi clan tracking, performance enhancements and other
        improvements.
      </p>
      <p>
        You can see the preview version fo the app at
        <a href="https://destinyclan.report/" target="_blank">https://destinyclan.report/</a>. I will keep this site up
        and running until we get close to feature parody.
      </p>
      <p>Thanks <a href="https://twitter.com/worthyd" target="_blank">WorthyD</a></p>
    </div>
    <div mat-dialog-actions style="text-align:right;">
      <button mat-button (click)="onNoClick()">Dismiss</button>
    </div>
  `
})
export class AppSunsetDialog {
  constructor(public dialogRef: MatDialogRef<AppSunsetDialog>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
