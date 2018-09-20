import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MidService } from './mid.service';
import { MatDialog } from '@angular/material';
import { MidFormModalComponent } from '../modal/mid-form-modal/mid-form-modal.component';
import { MidModalComponent } from '../modal/mid-modal/mid-modal.component';

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
  midIndex: number;
  midControl: boolean;
  midIsSaved: boolean;
  tidIndex: number;
  tidControl: boolean;

  @Input() action?: boolean;
  @Input() update?: boolean;
  constructor(private _route: ActivatedRoute, private _router: Router, private _service: MidService,
    private _dialog: MatDialog, private _renderer: Renderer2) { }

  ngOnInit() {
    this.dataSource = this._service.Get();
    this.form = this._route.snapshot.params['form'] || this.action;
    this.midIsSaved = false;
    /////// TO BE DELETED ////////
    this.update = true;
    /////////////////////////////
    this.displayedColumns = this._service.GetTableFields(this.update);

    if (this.action == false) {
      this.form = 'POS';
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

  showMidUpdateButton(index) {
    this.midIndex = index;
  }

  showTidUpdateButton(index) {
    this.tidIndex = index;
  }

  showMidControl() {
    this.midControl = true;
  }

  showTidControl() {
    this.tidControl = true;
  }

  checkSave(index) {
    if (this.midIsSaved === false) {
      document.getElementById('mid' + index).innerHTML = '';
    }
    this.midControl = false;
  }

  saveMid() {
    this.midIsSaved = true;
  }

  // hidTidControl() {
  //   this.tidControl = false;
  // }
  // generateMid() {
  //   this._dialog.open(MidModalComponent, {
  //     width: '80%'
  //   })
  // }
}
