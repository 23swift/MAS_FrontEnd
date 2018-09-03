import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-remarks-modal',
  templateUrl: './remarks-modal.component.html',
  styleUrls: ['./remarks-modal.component.css']
})
export class RemarksModalComponent implements OnInit {

  constructor(private _modalRef: MatDialogRef<RemarksModalComponent>) { }

  ngOnInit() {
  }

}
