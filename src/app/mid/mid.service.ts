import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = '';
@Injectable()
export class MidService {

  constructor(private _http: HttpClient) { }

  get() {
    // return this._http.get(apiUrl);
    return [
      { Id: 1, Currency: 'PHP', MonitorCode: 'OTC', MerchantGroupCode: 'DM01 - Diners' },
      { Id: 2, Currency: 'PHP', MonitorCode: 'Installment Reg', MerchantGroupCode: 'MerchGrp24' },
      { Id: 3, Currency: 'USD', MonitorCode: 'Reg Inst', MerchantGroupCode: 'MerchGrp1Z' },
      { Id: 4, Currency: 'PHP', MonitorCode: '0% Inst', MerchantGroupCode: '' },
      { Id: 5, Currency: 'PHP', MonitorCode: 'BNPL Reg', MerchantGroupCode: 'MerchGrp4' },
      { Id: 6, Currency: 'PHP', MonitorCode: 'BNPL 0%', MerchantGroupCode: 'MerchGrp1Z' }
    ];
  }
  getTableFields(update) {
    if (update) {
      return ['Currency', 'MonitorCode', 'MerchantGroupCode', 'MID', 'TID', 'Action'];
    } else {
      return ['Currency', 'MonitorCode', 'MerchantGroupCode', 'Action'];
    }
  }

  create(): void {
    this._http.post(apiUrl, {});
  }

  update(): void {
    this._http.post(apiUrl, {});
  }
}
