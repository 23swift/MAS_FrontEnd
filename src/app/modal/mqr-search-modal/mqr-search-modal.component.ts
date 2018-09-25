import { Component, OnInit } from '@angular/core';
import { FormControl } from '../../../../node_modules/@angular/forms';
import { MatDialogRef } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-mqr-search-modal',
  templateUrl: './mqr-search-modal.component.html',
  styleUrls: ['./mqr-search-modal.component.css']
})
export class MqrSearchModalComponent implements OnInit {

  constructor(private _matDialogRef: MatDialogRef<MqrSearchModalComponent>) { }

  ngOnInit( ) {

  }
  closeDialog() {
    this._matDialogRef.close();
  }

}
