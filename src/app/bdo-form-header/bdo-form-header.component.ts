import { Component, OnInit, Input } from '@angular/core';
import { IfStmt } from '@angular/compiler';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bdo-form-header',
  templateUrl: './bdo-form-header.component.html',
  styleUrls: ['./bdo-form-header.component.css']
})
export class BdoFormHeaderComponent implements OnInit {
  showApprovalOptions: boolean;
  showRequestFlowOptions: boolean;
  showCreateOptions: boolean;
  @Input() mode: string;
  @Input() text: string;
  @Input() sub_text: string;

  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    this.showApprovalOptions = false;
    this.showRequestFlowOptions = false;
    this.showCreateOptions = false;

    this.mode = this.mode ? this.mode : 'create';

    if (this._router.url !== '/home') {
      if (this.mode === 'approval') {
        this.showApprovalOptions = true;
      }
      if (this.mode.match(/update/i) || this.mode.match(/approval/)) {
        this.showRequestFlowOptions = true;
      }
      if (this.mode.match(/create/i)) {
        this.showCreateOptions = true;
      }
    }
  }
}
