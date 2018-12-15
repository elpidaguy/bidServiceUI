import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ActiveRequestPage } from '../active-request/active-request';

@Component({
  selector: 'page-add-edit-request',
  templateUrl: 'add-edit-request.html'
})
export class AddEditRequestPage {

  requestForm: FormGroup;
  categories = ['Cat 1', 'Cat 2', 'Cat 3', 'Cat 4', 'Cat 5'];
  sub_categories = ['Subcat 1', 'Subcat 2', 'Subcat 3', 'Subcat 4', 'Subcat 5'];
  priority = ['High', 'Moderate', 'Low'];

  constructor(public navCtrl: NavController, public fb: FormBuilder,
    public dialog: MatDialog, public snackBar: MatSnackBar
  ) {
    this.requestForm = this.fb.group({
      'title': ['', [Validators.compose([Validators.required])]],
      'date': ['', [Validators.compose([Validators.required])]],
      'category': ['', [Validators.compose([Validators.required])]],
      'sub_category': ['', [Validators.compose([Validators.required])]],
      'budget': ['', [Validators.compose([Validators.required])]],
      'priority': ['', [Validators.compose([Validators.required])]],
      'description': ['', [Validators.compose([Validators.required])]]
    });
  }

  registerRequest() {
    const dialogRef = this.dialog.open(ConfirmDialoge, {
      width: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: 1000,
        });
        this.navCtrl.setRoot(ActiveRequestPage);
      }
    });
  }

  cancel() {
    this.navCtrl.setRoot(ActiveRequestPage);
  }

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
}




@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
  <div mat-dialog-content>
      <h2>Are you sure ?</h2>
  </div>
  <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Not sure.</button>
      <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Yes Cofirm.</button>
  </div>
`,
})
export class ConfirmDialoge {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialoge>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


@Component({
  selector: 'snack-bar-component-example-snack',
  template: `
  <span class="example-pizza-party">
    Success !!! 🍕
  </span>
`,
  styles: [`
    .example-pizza-party {
      color: white;
    }
  `],
})
export class SnackBarComponent { }