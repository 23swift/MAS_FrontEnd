import { Injectable } from '@angular/core';
import { DashboardData } from '../../temp/dashboardData/dashboard-data';

@Injectable()

export class AoEncoderDashboardService {
  private _dashboard: DashboardData;

  constructor() {
    this._dashboard = new DashboardData();
  }

  Get() {
    return this._dashboard.ElementData;
  }

  GetTableFields() {
    return this._dashboard.Fields;
  }
}
