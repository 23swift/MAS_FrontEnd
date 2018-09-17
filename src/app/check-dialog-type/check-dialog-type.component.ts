import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/material';
import {  MatDialog } from '@angular/material';
import { RemarksModalComponent } from '../modal/remarks-modal/remarks-modal.component';

@Component({
  selector: 'app-check-dialog-type',
  templateUrl: './check-dialog-type.component.html',
  styleUrls: ['./check-dialog-type.component.css']
})
export class CheckDialogTypeComponent extends FieldType implements OnInit {
  //indeterminate : boolean;
  indeterminate = true;
  checked = false;
  constructor(private _dialogRemarks: MatDialog) {
    super()
   }

  ngOnInit() {
    
  }

  getValue(event) {
    if (event.checked) {
       this.indeterminate = false;
      this._dialogRemarks.open(RemarksModalComponent, {
        width: '50%'
      });
    }
  }
}
