import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailedRequestPage } from '../detailed-request/detailed-request';
import { AddEditRequestPage } from '../add-edit-request/add-edit-request';
@Component({
  selector: 'page-history-request',
  templateUrl: 'history-request.html'
})
export class HistoryRequestPage {

  constructor(public navCtrl: NavController) {
  }

  exploreRequest(req) {
    this.navCtrl.push(DetailedRequestPage, req);
  }

  addRequest() {
    this.navCtrl.push(AddEditRequestPage);
  }
}
