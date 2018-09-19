import { Component, OnInit } from '@angular/core';
import { MdcsUserDashboardService } from './mdcs-user-dashboard.service';
import { IRequestDisplay } from '../../temp/interface/irequest-display';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-mdcs-user-dashboard',
  templateUrl: './mdcs-user-dashboard.component.html',
  styleUrls: ['./mdcs-user-dashboard.component.css'],
  providers: [MdcsUserDashboardService]
})
export class MdcsUserDashboardComponent implements OnInit {
  displayedColumns: string[];
  dataSource: IRequestDisplay[];

  mode: string;
  title: string;
  subTitle: string;
  constructor(private _service: MdcsUserDashboardService, private _router: Router) { }

  ngOnInit() {
    this.displayedColumns = this._service.GetTableFields();
    this.dataSource = this._service.Get();

    this.mode = 'create';
    this.title = 'New Affiliation';
    this.subTitle = 'MDCS User';
  }

  GetItem() {
    this._router.navigateByUrl('na/mdcsUser');
  }
}
