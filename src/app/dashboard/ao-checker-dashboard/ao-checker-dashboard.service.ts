import { Injectable, OnInit } from '@angular/core';
import { DashboardData } from '../../temp/dashboardData/dashboard-data';
import { HttpClient } from '@angular/common/http';

const apiUrl = '';
@Injectable()
export class AoCheckerDashboardService implements OnInit {
  private _dashboard: DashboardData;

  constructor(private _http: HttpClient) {
    this._dashboard = new DashboardData();
  }

  ngOnInit() {
    
  }

  getTableFields() {
    return this._dashboard.Fields;
  }
  
  getAll() {
    return this._http.get(apiUrl);
  }

  get(id) {
    // return this._http.get(apiUrl + id);
    return this._dashboard.ElementData;
  }

  create(): void {
    this._http.post(apiUrl, {});
  }

  update(): void {
    this._http.put(apiUrl, {});
  }
}
