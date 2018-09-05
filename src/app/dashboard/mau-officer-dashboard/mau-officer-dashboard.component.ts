import { Component, OnInit } from '@angular/core';
import { MauOfficerDashboardService } from './mau-officer-dashboard.service';
import { IRequestDisplay } from '../../temp/interface/irequest-display';
import { MatDialogRef, MatDialog, MatSnackBar } from '../../../../node_modules/@angular/material';
import { AoListModalComponent } from '../../modal/ao-list-modal/ao-list-modal.component';

@Component({
  selector: 'app-mau-officer-dashboard',
  templateUrl: './mau-officer-dashboard.component.html',
  styleUrls: ['./mau-officer-dashboard.component.css'],
  providers: [MauOfficerDashboardService]
})
export class MauOfficerDashboardComponent implements OnInit {
  displayedColumns: string[];
  dataSource: IRequestDisplay[];

  mode: string;
  title: string;
  subTitle: string;


  constructor(private _service: MauOfficerDashboardService,
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.displayedColumns = this._service.GetTableFields();
    this.dataSource = this._service.Get();

    this.mode = '';
    this.title = '';
    this.subTitle = '';
  }

  openDialog(id, trackingNo): void {
    const dialogRef = this._dialog.open(AoListModalComponent, {
      width: '600px',
      height: '300px',
      data: { id: id, trackingNo: trackingNo }
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this._snackBar.open('Successfully Assigned To : ', data,
          {
            duration: 2000
          });
      }
      else {

      }
    });
  }



}
