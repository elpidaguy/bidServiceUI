import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
} from '@angular/material';
import { ActiveRequestPage } from '../pages/active-request/active-request';
import { HistoryRequestPage } from '../pages/history-request/history-request';
import { BidderProfilePage } from '../pages/bidder-profile/bidder-profile';
import { AddEditRequestPage, SnackBarComponent, ConfirmDialoge } from '../pages/add-edit-request/add-edit-request';
import { ConfirmLogoutPage } from '../pages/logout-confirm/logout-confirm';
import { DetailedRequestPage } from '../pages/detailed-request/detailed-request';
import { LoginPage } from '../pages/login/login';
import { CommonService } from './common.service';
import { InterceptorModule } from './interceptor.module';

@NgModule({
    declarations: [
        MyApp,
        LoginPage,
        ActiveRequestPage,
        DetailedRequestPage,
        HistoryRequestPage,
        BidderProfilePage,
        AddEditRequestPage,
        ConfirmLogoutPage,


        SnackBarComponent,
        ConfirmDialoge
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp, {
            scrollPadding: false,
            scrollAssist: true,
            autoFocusAssist: false
        }),
        IonicStorageModule.forRoot(),
        InterceptorModule,
        BrowserAnimationsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatStepperModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        LoginPage,
        ActiveRequestPage,
        DetailedRequestPage,
        HistoryRequestPage,
        BidderProfilePage,
        AddEditRequestPage,
        ConfirmLogoutPage,

        SnackBarComponent,
        ConfirmDialoge
    ],
    providers: [
        StatusBar,
        SplashScreen,
        CommonService,
        {
            provide: ErrorHandler,
            useClass: IonicErrorHandler
        }
    ]
})
export class AppModule { }