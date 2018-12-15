import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailedRequestPage } from '../detailed-request/detailed-request';
import { AddEditRequestPage } from '../add-edit-request/add-edit-request';

@Component({
  selector: 'page-active-request',
  templateUrl: 'active-request.html'
})
export class ActiveRequestPage {

  constructor(public navCtrl: NavController) {
  }

  exploreRequest(req) {
    this.navCtrl.push(DetailedRequestPage, req);
  }
  
  addRequest() {
    this.navCtrl.push(AddEditRequestPage);
  }
}
