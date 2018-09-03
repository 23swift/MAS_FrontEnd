import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppBaseComponent } from '../app-base/app-base.component';

@Component({
  selector: 'app-merchant-affiliation-maintenance',
  templateUrl: './merchant-affiliation-maintenance.component.html',
  styleUrls: ['./merchant-affiliation-maintenance.component.css']
})
export class MerchantAffiliationMaintenanceComponent extends AppBaseComponent implements OnInit {
  title: string = 'Merchant Affiliation & Maintenance Pre-screening and Evaluation';
  @Input()displayMode:boolean=false;
  constructor(public route: ActivatedRoute,
    public router: Router) { 
      super(route, router);
    }

  ngOnInit() {
  }

}
