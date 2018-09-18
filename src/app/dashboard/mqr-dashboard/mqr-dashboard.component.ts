import { Component, OnInit } from '@angular/core';
import { MqrDashboardService } from './mqr-dashboard.service';
import { IRequestDisplay } from '../../temp/interface/irequest-display';
import { Route, Router, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-mqr-dashboard',
  templateUrl: './mqr-dashboard.component.html',
  styleUrls: ['./mqr-dashboard.component.css'],
  providers: [MqrDashboardService]
})
export class MqrDashboardComponent implements OnInit {
  displayedColumns: string[];
  dataSource: IRequestDisplay[];
  id: number;
  mode: string;
  title: string;
  subTitle: string;
  constructor(private _service: MqrDashboardService,
              private _route: ActivatedRoute,
              private _router: Router,) { }

  ngOnInit() {
    this.displayedColumns = this._service.GetTableFields();
    this.dataSource = this._service.Get();

    this.mode = 'create';
    this.title = 'New Affiliation';
    this.subTitle = 'MAU Encoder';
  }

  GetItem(id) {
    //console.log(id);
    this._router.navigateByUrl('na/mqrUser/approval/' + id);
  }
}
