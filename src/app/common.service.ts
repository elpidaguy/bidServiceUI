import { Injectable } from '@angular/core';
import { LoadingController, ToastController, Toast, Loading, Platform } from 'ionic-angular';

@Injectable()
export class CommonService {
    // toast: Toast;
    load: Loading;
    constructor(
        private platform: Platform,
        public loadingCtrl: LoadingController,
        // private toastCtrl: ToastController
    ) { }

    // presentToast(text: string, isSafe: boolean): void {
    //     this.hideLoading();
    //     this.showToast(text, isSafe);
    // }

    presentLoading(): void {
        this.showLoading();
    }

    // public showToast(text: any, type: any): void {
    //     let ext = this.platform.is('ios') ? "ios-" : '';        
    //     let toastData = {
    //         message: text,
    //         duration: 4000,
    //         position: 'top',
    //         cssClass: type ? ext+'safeToast' : ext+'dangerToast',
    //         dismissOnPageChange: false
    //     };
    //     this.toast ? this.toast.dismiss() : false;
    //     this.toast = this.toastCtrl.create(toastData);
    //     this.toast.present();
    // }

    private showLoading(): void {
        let loadData = {
            cssClass: 'my-loading-class',
            dismissOnPageChange: true
        };
        if (!this.load) {
            this.load = this.loadingCtrl.create(loadData);
            this.load.present();
        }
    }

    hideLoading(): void {
        if (this.load) {
            this.load.dismiss();
            this.load = null;
        }
    }
}