import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MidService } from './mid.service';

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
  constructor(private _route: ActivatedRoute, private _router: Router, private _service: MidService) { }

  ngOnInit() {
    this.dataSource = this._service.Get();
    this.displayedColumns = this._service.GetTableFields();
  }
  AddMid() {
    // this._router.navigateByUrl('/midForm');
  }
}
