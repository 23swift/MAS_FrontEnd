import { Component, OnInit, Input } from '@angular/core';
import { AppBaseComponent } from '../app-base/app-base.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-approval',
  templateUrl: './request-approval.component.html',
  styleUrls: ['./request-approval.component.css']
})
export class RequestApprovalComponent extends AppBaseComponent implements OnInit {
  @Input()displayMode:boolean=true;
  title: string = 'Request Approval';
  constructor(public route: ActivatedRoute,
    public router: Router) {
    super(route,router);
  }

  ngOnInit() {
  }

}
