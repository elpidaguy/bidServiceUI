import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailedRequestPage } from '../detailed-request/detailed-request';
import { AddEditRequestPage } from '../add-edit-request/add-edit-request';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loginForm: FormGroup;

  constructor(public navCtrl: NavController, public fb: FormBuilder,
    public dialog: MatDialog, public snackBar: MatSnackBar) {
    this.loginForm = this.fb.group({
      'username': ['', [Validators.compose([Validators.required])]],
      'password': ['', [Validators.compose([Validators.required])]],
      'userType': ['', [Validators.compose([Validators.required])]]
    });
  }

  login() {
    if (!this.loginForm.valid) {
      this.snackBar.open('Please enter username and password', '', {
        duration: 1000,
      });
    } else if (this.loginForm.value.username == 'admin' && this.loginForm.value.password == 'password') {
      this.snackBar.open('Login Success', '', {
        duration: 1000,
      });
    } else {
      this.snackBar.open('Fail to login. Invalid credentials', '', {
        duration: 1000,
      });
    }
  }
}
