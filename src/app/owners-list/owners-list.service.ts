import { Injectable } from '@angular/core';

@Injectable()
export class OwnersListService {

  constructor() { }

  getTableFields() {
    return ["Name", "PercentOfOwnership", "TypeOfRelatedParty", "Remarks", "Action"];
  }

  get() {
    return [
      
    ];
  }
}
