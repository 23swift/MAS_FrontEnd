import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { PosTerminalBrandListService } from './pos-terminal-brand-list.service';
import { PosTerminalFormModalComponent } from '../modal/pos-terminal-form-modal/pos-terminal-form-modal.component';

@Component({
  selector: 'app-pos-terminal-brand-list',
  templateUrl: './pos-terminal-brand-list.component.html',
  styleUrls: ['./pos-terminal-brand-list.component.css'],
  providers: [PosTerminalBrandListService]
})
export class PosTerminalBrandListComponent implements OnInit {
  displayedColumns;
  dataSource;
  showAddTerminal: boolean;

  constructor(private _service: PosTerminalBrandListService, private _dialog: MatDialog) { }

  ngOnInit() {
    this.displayedColumns = this._service.getTableFields();
    this.dataSource = this._service.get();
    this.showAddTerminal = false;
  }

  addTerminal() {
    this._dialog.open(PosTerminalFormModalComponent, {
      width: '50%'
    })
  }
}
