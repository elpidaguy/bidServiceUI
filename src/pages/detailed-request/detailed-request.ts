import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BidderProfilePage } from '../bidder-profile/bidder-profile';

@Component({
  selector: 'page-detailed-request',
  templateUrl: 'detailed-request.html'
})
export class DetailedRequestPage {

  constructor(public navCtrl: NavController) {
  }

  exploreBidderProfile(bidder) {
    this.navCtrl.push(BidderProfilePage, bidder);
  }

}
