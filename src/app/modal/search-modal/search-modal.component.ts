import { Component, OnInit } from '@angular/core';
import { FormControl } from '../../../../node_modules/@angular/forms';
import { MatDialogRef } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.css']
})
export class SearchModalComponent implements OnInit {

  constructor(private _matDialogRef: MatDialogRef<SearchModalComponent>) { }

  ngOnInit( ) {

  }
  closeDialog() {
    this._matDialogRef.close();
  }

}
