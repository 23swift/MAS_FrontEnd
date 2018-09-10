import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MidService } from './mid.service';
import { MatDialog } from '@angular/material';
import { MidFormModalComponent } from '../modal/mid-form-modal/mid-form-modal.component';

@Component({
  selector: 'app-mid',
  templateUrl: './mid.component.html',
  styleUrls: ['./mid.component.css'],
  providers: [MidService]
})
export class MidComponent implements OnInit {
  displayedColumns: string[];
  mode: string;
  dataSource;
  form: string;
  constructor(private _route: ActivatedRoute, private _router: Router, private _service: MidService,
  private _dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource = this._service.Get();
    this.displayedColumns = this._service.GetTableFields();
    this.form = this._route.snapshot.params['form'];

    if (this.form) {
      const index = this.displayedColumns.indexOf('Action');
      this.displayedColumns.splice(index, 1);
    }
  }
  AddMid() {
    this._dialog.open(MidFormModalComponent, {
      width: '80%'
    });
  }

  GetItem(id) {
    this._dialog.open(MidFormModalComponent, {
      width: '80%'
    });
  }
}
