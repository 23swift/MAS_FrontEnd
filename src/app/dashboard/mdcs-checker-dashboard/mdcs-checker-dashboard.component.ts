import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdcsCheckerDashboardService } from './mdcs-checker-dashboard.service';
import { IRequestDisplay } from '../../temp/interface/irequest-display';

@Component({
  selector: 'app-mdcs-checker-dashboard',
  templateUrl: './mdcs-checker-dashboard.component.html',
  styleUrls: ['./mdcs-checker-dashboard.component.css'],
  providers: [MdcsCheckerDashboardService]
})
export class MdcsCheckerDashboardComponent implements OnInit {
  displayedColumns: string[];
  dataSource: IRequestDisplay[];
  
  constructor(private _route: ActivatedRoute, private _router: Router, private _service: MdcsCheckerDashboardService) { }

  ngOnInit() {
    this.displayedColumns = this._service.GetTableFields();
    this.dataSource = this._service.Get();
  }

  private GetItem(Id) {
    this._router.navigateByUrl('na/mdcsChecker');
  }
}
