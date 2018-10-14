import { Injectable } from '@angular/core';

@Injectable()
export class PosListService {

  constructor() { }

  getTableFields() {
    return ['PosTrackingNumber','NatureOfRequest','DateRequested','RequestedBy'];
  }

  get() {
    return [];
  }
}
