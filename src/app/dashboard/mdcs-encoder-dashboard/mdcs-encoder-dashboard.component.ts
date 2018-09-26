import { Component, OnInit } from '@angular/core';
import { MdcsEncoderDashboardService } from './mdcs-encoder-dashboard.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { IRequestDisplay } from '../../temp/interface/irequest-display';

@Component({
  selector: 'app-mdcs-encoder-dashboard',
  templateUrl: './mdcs-encoder-dashboard.component.html',
  styleUrls: ['./mdcs-encoder-dashboard.component.css'],
  providers: [MdcsEncoderDashboardService]
})
export class MdcsEncoderDashboardComponent implements OnInit {
  displayedColumns: string[];
  dataSource: IRequestDisplay[];
  
  constructor(private _route: ActivatedRoute, private _router: Router, private _service: MdcsEncoderDashboardService) { }

  ngOnInit() {
    this.displayedColumns = this._service.GetTableFields();
    this.dataSource = this._service.Get();
  }

  private GetItem(Id) {
    this._router.navigateByUrl('na/mdcsEncoder');
  }
}
