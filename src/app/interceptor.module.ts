import { Injectable, NgModule } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/timeout';
import { tap } from 'rxjs/operators';
import { Platform, NavController, App } from 'ionic-angular';
import { MatSnackBar } from '@angular/material';
import { CommonService } from './common.service';

declare var navigator: any;
declare var Connection: any;

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
    constructor(
        private overlay: CommonService,
        public snackBar: MatSnackBar,
        private platform: Platform,
        private app: App) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.platform.is('cordova')) {
            if (navigator.connection.type == Connection.NONE) {
                this.snackBar.open('Please check your internet connection try again later.', '', {
                    duration: 1000,
                });
                var nav = this.app.getActiveNav();
                nav.popToRoot();
                return Observable.create(null);
            } else {
                this.overlay.presentLoading();
                return next.handle(req)
                    // .timeout(100)
                    .do(event => {
                        if (event instanceof HttpResponse) {
                            this.overlay.hideLoading();
                        }
                    }, (err: any) => {
                        console.log(err)
                        if (err.status == 0 && navigator.connection.type != Connection.NONE) {
                            this.snackBar.open('Server Unreachable', '', {
                                duration: 1000,
                            });
                        } else {
                            this.snackBar.open('Server Error', '', {
                                duration: 1000,
                            });
                        }
                        this.overlay.hideLoading();
                        var nav = this.app.getActiveNav();
                        nav.popToRoot();
                    });
            }
        } else {
            this.overlay.presentLoading();
            return next.handle(req)
                // .timeout(100)
                .pipe(
                    tap(event => {
                        if (event instanceof HttpResponse) {
                            this.overlay.hideLoading();
                        }
                    }, error => {
                        console.log(error);
                        if (error.status == 0) {
                            this.snackBar.open('Server Unreachable', '', {
                                duration: 1000,
                            });
                        } else {
                            this.snackBar.open('Server Error', '', {
                                duration: 1000,
                            });
                        }
                        this.overlay.hideLoading();
                        var nav = this.app.getActiveNav();
                        nav.popToRoot();
                    })
                );
        }
    };
}
@NgModule({
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true }
    ]
})
export class InterceptorModule { }