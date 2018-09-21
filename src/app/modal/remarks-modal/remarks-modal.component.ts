import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { inject } from '../../../../node_modules/@angular/core/testing';

export interface RemModal {
  remarks: string;
}

@Component({
  selector: 'app-remarks-modal',
  templateUrl: './remarks-modal.component.html',
  styleUrls: ['./remarks-modal.component.css']
})



export class RemarksModalComponent implements OnInit {
  
  form: FormGroup;


  constructor(

    private _modalRef: MatDialogRef<RemarksModalComponent>

  ) { 

    this.form = new FormGroup({
      remarks: new FormControl('')
    });

  }

  ngOnInit() {
  }

  Submit() {
    this._modalRef.close(this.form.value);
  }
}
