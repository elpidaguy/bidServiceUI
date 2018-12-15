import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ConfirmDialoge, SnackBarComponent } from '../add-edit-request/add-edit-request';
import { ActiveRequestPage } from '../active-request/active-request';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-logout-confirm',
  templateUrl: 'logout-confirm.html'
})
export class ConfirmLogoutPage {

  constructor(
    public storage: Storage, public dialog: MatDialog,
    public navCtrl: NavController, public snackBar: MatSnackBar) {
    const dialogRef = this.dialog.open(ConfirmDialoge, {
      width: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: 1000,
        });
        this.storage.set("user", "");
        this.navCtrl.setRoot(LoginPage);
      } else {
        this.navCtrl.setRoot(ActiveRequestPage);
      }
    });
  }

}
